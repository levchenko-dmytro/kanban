export interface IssuesDataInter {
  total_count: number
  incomplete_results: boolean
  items: IssueInter[]
}

export interface IssueInter {
  id: number
  number: number
  title: string
  user: User
  state: 'open' | 'closed'
  assignee: Assignee | null
  created_at: string
  comments: number
}

export interface User {
  login: string
  id: number
}

export interface Assignee {
  login: string
  id: number
}
