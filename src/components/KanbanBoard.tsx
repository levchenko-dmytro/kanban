import { useEffect, useState } from "react"
import { Box, Text, Flex, Link, Icon } from "@chakra-ui/react"
import { FaStar } from "react-icons/fa"
import { useGetIssuesListQuery, useGetRepoDataQuery } from "../api/repoApi"
import Form from "./Form"
import Column from "./Column"
import { DndContext, DragEndEvent, DragOverEvent, DragOverlay, DragStartEvent, UniqueIdentifier } from '@dnd-kit/core'
import { findColumnId } from "../helpers/findColumnId"
import { arrayMove } from "@dnd-kit/sortable"
import { IssuesSortedType } from "../types/IssuesSortedType"
import Card from "./Card"
import { capitalizeFirstLetter } from "../helpers/capitalizeFirstLetter"
import { findIssue } from "../helpers/findIssue"
import { getStarsQnt } from "../helpers/getStarsQnt"

const KanbanBoard = () => {
  const [repoUrl, setRepoUrl] = useState<URL>()
  const [issuesState, setIssuesState] = useState<IssuesSortedType>({
    ToDo: [],
    "In Progress": [],
    Done: [],
  })

  const path = repoUrl?.pathname.slice(1) || ''
  const { data: issuesData } = useGetIssuesListQuery(path, { skip: !path })
  const { data: repoData } = useGetRepoDataQuery(path, { skip: !path })

  const [owner, repo] = path.split('/')

  useEffect(() => {
    const storedIssues = localStorage.getItem(path)

    if (storedIssues) {
      setIssuesState(JSON.parse(storedIssues))
      return
    }

    if (issuesData) {
      setIssuesState(issuesData)
      return
    }
  }, [path, issuesData])

  useEffect(() => {
    if (path && Object.values(issuesState).some(issues => issues.length > 0)) localStorage.setItem(path, JSON.stringify(issuesState))
  }, [path, issuesState])

  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null)

  const onDragStart = (event: DragStartEvent) => {
    const { active } = event

    setActiveId(active.id)
  }

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event

    if (!over) return

    const activeContainer = findColumnId(issuesState, active.id)
    const overContainer = findColumnId(issuesState, over.id)

    if (!activeContainer || !overContainer || activeContainer === overContainer) {
      return
    }
    const activeItems = issuesState[activeContainer]
    const overItems = issuesState[overContainer]

    const activeIndex = activeItems.findIndex(
      (item) => item.id === active.id
    )
    const overIndex = overItems.findIndex((item) => item.id !== over.id)

    setIssuesState(prev => {
      return {
        ...prev,
        [activeContainer]: [
          ...activeItems.filter(
            (item) => item.id !== active.id
          ),
        ],
        [overContainer]: [
          ...overItems.slice(0, overIndex),
          activeItems[activeIndex],
          ...overItems.slice(overIndex)
        ]
      }
    })
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (!over) return

    const activeContainer = findColumnId(issuesState, active.id)
    const overContainer = findColumnId(issuesState, over.id)

    if (!activeContainer || !overContainer || activeContainer !== overContainer) {
      return
    }

    const activeItems = issuesState[activeContainer]
    const overItems = issuesState[overContainer]

    const activeIndex = activeItems.findIndex((item) => item.id === active.id)
    const overIndex = overItems.findIndex((item) => item.id === over.id)

    setIssuesState(prev => ({
      ...prev,
      [overContainer]: arrayMove(overItems, activeIndex, overIndex)
    }))

    setActiveId(null)
  }

  return (
    <Box>
      <Form setRepoUrl={setRepoUrl} />

      {!path && (
        <Flex justifyContent='flex-start' gapX={2}>
        <Text fontWeight="bold">
          Exmple:
        </Text>
        <Text>
          https://github.com/facebook/react
        </Text>
      </Flex>
      )}

      {repoData && (
        <Flex mb={4} alignItems="center">
          <Flex gapX={2}>
            <Link href={`https://github.com/${owner}`} target="_blank" color="blue.500">
              {capitalizeFirstLetter(owner)}
            </Link>
            <Text color="blue.500">&gt;</Text>
            <Link href={`https://github.com/${owner}/${repo}`} target="_blank" color="blue.500">
              {capitalizeFirstLetter(repo)}
            </Link>
          </Flex>
          <Flex alignItems="center" ml={4}>
            <Icon as={FaStar} color="orange.400" />
            <Text ml={1}>{getStarsQnt(repoData.stargazers_count)} stars</Text>
          </Flex>
        </Flex>
      )}

      {issuesData && (
        <DndContext onDragStart={onDragStart} onDragOver={handleDragOver} onDragEnd={handleDragEnd}>
          <Flex gap={4}>
            {Object.entries(issuesState).map(([column, issues]) => (
              <Column
                key={column}
                column={column}
                issues={issues}
              />
            ))}
          </Flex>
          <DragOverlay>
            {activeId ? <Card cursorStyle='grabbing' issue={findIssue(issuesState, activeId)} /> : null}
          </DragOverlay>
        </DndContext>
      )}
    </Box>
  )
}

export default KanbanBoard
