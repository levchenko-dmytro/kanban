import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { createReduxStore } from '../config/store'

interface IStoreProviderProps {
    children?: ReactNode
}

// eslint-disable-next-line react-refresh/only-export-components
export const store = createReduxStore()

const StoreProvider = (props: IStoreProviderProps) => {
    const { children } = props

    return (
        <Provider store={store}>{children}</Provider>
    )
}

export default StoreProvider
