import { ColumnType } from "../types/IssuesSortedType"
import { Assignee } from "../types/issuesResponseData"

export const getIssueStatus = (state: string, assignee: null | Assignee): ColumnType => {
  if (state === 'open' && assignee) {
    return 'In Progress'
  }

  if (state === 'open') {
    return 'ToDo'
  }

  return 'Done'
}
