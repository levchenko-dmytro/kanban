import { Box, Text } from "@chakra-ui/react"
import { IssueInter } from "../types/issuesResponseData"
import { CSS } from "@dnd-kit/utilities"
import { useSortable } from "@dnd-kit/sortable"
import { getTimePassed } from "../helpers/getTimePassed"

const Card = ({ issue, cursorStyle }: { issue: IssueInter | null, cursorStyle?: string }) => {
  const { setNodeRef, attributes, listeners, transform, transition, isDragging } = useSortable({
    id: issue?.id || 0,
  })

  if (!issue) return null

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? '0.6' : '1',
    cursor: cursorStyle ? cursorStyle : 'grab',
  }

  return (
    <Box
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      p={3}
      borderWidth={1}
      borderRadius="md"
      bg="white"
      w="100%"
      style={style}
    >
      <Text fontWeight="bold">{issue.title}</Text>
      <Text fontSize="sm">#{issue.number} opened {getTimePassed(issue.created_at)}</Text>
      <Text fontSize="sm">{issue.user.login} | Comments: {issue.comments}</Text>
    </Box>
  )
}

export default Card
