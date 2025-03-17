import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IssueInter } from '../types/issuesResponseData'
import { RepoDataInter } from '../types/repoResponseData'
import { IssuesSortedType } from '../types/IssuesSortedType'
import { getPrepData } from '../helpers/getPrepData'

export const repoApi = createApi({
  reducerPath: 'repoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/repos' }),
  endpoints: (build) => ({
    getIssuesList: build.query<IssuesSortedType, string>({
      query: (path) => `/${path}/issues?state=all`,
      transformResponse: (response: IssueInter[]): IssuesSortedType => {
        return getPrepData(response)
      }
    }),
    getRepoData: build.query<RepoDataInter, string>({
      query: (path) => `/${path}`,
    }),
  }),
})

export const { useGetIssuesListQuery, useGetRepoDataQuery } = repoApi
