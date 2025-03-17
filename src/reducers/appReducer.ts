import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppSchemaInter } from './types/appSchema'

const initialState: AppSchemaInter = {
  pageNumber: 1,
  inputValue: '',
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setPageNumber: (state, action: PayloadAction<number>) => {
            state.pageNumber = action.payload
        },
        setInputValue: (state, action: PayloadAction<string>) => {
            state.inputValue = action.payload
        },
    },
})

export const { actions: appActions, reducer: appReducer } = appSlice

