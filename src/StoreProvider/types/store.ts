import { repoApi } from "../../api/repoApi"
import { AppSchemaInter } from "../../reducers/types/appSchema"

export interface StateSchemaInter {
    app: AppSchemaInter
    [repoApi.reducerPath]: ReturnType<typeof repoApi.reducer>
}

export interface IThunkConfig<T> {
    rejectValue: T
    state: StateSchemaInter
}

