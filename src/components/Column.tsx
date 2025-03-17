import { Box, Heading, VStack } from "@chakra-ui/react"
import Card from "./Card"
import { IssueInter } from "../types/issuesResponseData"
import { SortableContext } from "@dnd-kit/sortable"
import { useDroppable } from "@dnd-kit/core"

const Column = ({ issues, column }: { issues: IssueInter[], column: string }) => {

  const { setNodeRef } = useDroppable({
    id: column,
  })

  return (
    <SortableContext items={issues.map(issue => issue.id)}>
      <Box data-id='coll' ref={setNodeRef} flex={1} p={3} borderWidth={1} borderRadius="md" bg="gray.100">
        <Heading size="md" mb={2}>
          {column}
        </Heading>
        <Box>
          <VStack gap={2} >
            {issues.map((issue) => (
              <Card key={issue.id} issue={issue} />
            ))}
          </VStack>
        </Box>
      </Box>
    </SortableContext>
  )
}

export default Column
