"use client"
import store from '#/state/store'
import React from 'react'
import { Provider } from "react-redux"


interface ReduxProviderProps {
    children: React.ReactNode
}

const ReduxProvider = ({ children }: ReduxProviderProps) => {
    return (
        <Provider store={store}>{children}</Provider>
    )
}


ReduxProvider.displayName = "ReduxProvider"


export default ReduxProvider;
