import { ColumnType, IssuesSortedType } from '../types/IssuesSortedType'

export const findColumnId = (
  boardSections: IssuesSortedType,
  id: string | number,
): ColumnType => {
  if (id in boardSections) {
    return id as ColumnType
  }

  const container = Object.keys(boardSections).find((key) => {
    const typedKey = key as ColumnType

    return boardSections[typedKey].find((item) => item.id === id)
  })
  return container as ColumnType
}
