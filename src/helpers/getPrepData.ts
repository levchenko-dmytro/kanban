import { IssuesSortedType } from "../types/IssuesSortedType"
import { IssueInter } from "../types/issuesResponseData"
import { getIssueStatus } from "./getIssueStatus"

export const getPrepData = (data: IssueInter[]): IssuesSortedType => {
  const result: IssuesSortedType = {
    'ToDo': [],
    'In Progress': [],
    'Done': [],
  }

  data.forEach(issue => {
    const issueStatus = getIssueStatus(issue.state, issue.assignee)

    result[issueStatus].push(issue)
  })

  return result
}
