import { UniqueIdentifier } from '@dnd-kit/core'
import { IssuesSortedType } from '../types/IssuesSortedType'
import { findColumnId } from './findColumnId'

export const findIssue = (issues: IssuesSortedType, id: UniqueIdentifier) => {
  const column = findColumnId(issues, id)

  return issues[column].find((issue) => issue.id === id) || null
}
