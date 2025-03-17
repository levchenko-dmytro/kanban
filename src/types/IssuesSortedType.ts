import { IssueInter } from "./issuesResponseData"

export type ColumnType = 'ToDo' | 'In Progress' | 'Done'

export type IssuesSortedType = {
  [key in ColumnType]: IssueInter[]
}
