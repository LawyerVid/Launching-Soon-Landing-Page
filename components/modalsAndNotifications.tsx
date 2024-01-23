"use client"
import React from 'react'
import LogoutModal from './modals/logoutModal'
import ReduxProvider from './reduxProvider'



interface ModalsAndNotificationsProps {

}

const ModalsAndNotifications = (props: ModalsAndNotificationsProps) => {
    return (
        <ReduxProvider>
            <LogoutModal />
        </ReduxProvider>
    )
}


ModalsAndNotifications.displayName = "ModalsAndNotifications"


export default ModalsAndNotifications;
