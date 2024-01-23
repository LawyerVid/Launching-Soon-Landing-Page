import type { serverClient } from "#/trpc/serverClient"

interface InitialNotificationState {
    modals: {
        logout: boolean
        scheduleWithinAllowed: {
            attorney?: NonNullable<Awaited<ReturnType<typeof serverClient.search.getAttorneyProfile>>>
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
