
interface InitialNotificationState {
    modals: {
        logout: boolean
        scheduleWithinAllowed: {
            attorney?: any
            timeFrame?: {
                start: number
                end: number
                id: number
            } | "any"
            open: boolean
        }
    }
}

export const initialNotificationState: InitialNotificationState = {
    modals: {
        logout: false,
        scheduleWithinAllowed: {
            open: false
        }
    }
}
