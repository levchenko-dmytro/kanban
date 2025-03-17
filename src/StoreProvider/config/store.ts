import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { appReducer } from '../../reducers/appReducer'
import { repoApi } from '../../api/repoApi'
import { store } from '../ui/StoreProvider'
import { StateSchemaInter } from '../types/store'

export function createReduxStore() {
  const rootReducers: ReducersMapObject<StateSchemaInter> = {
      app: appReducer,
      [repoApi.reducerPath]: repoApi.reducer,
  }

  return configureStore({
      reducer: rootReducers,
      middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware().concat(repoApi.middleware),
  })
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
export type RootState = ReturnType<typeof store.getState>
