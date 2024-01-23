import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "../initialState";
import type { serverClient } from "#/trpc/serverClient";

const slice = createSlice({
    name: "notifications",
    initialState: initialState.notifications as typeof initialState['notifications'],
    reducers: {
        showLogoutModal: (state, action: PayloadAction<boolean | undefined>) => {
            state.modals.logout = typeof action.payload === "boolean" ? action.payload : true
        },
        showScheduleWithinAllowedModal: (state, action: PayloadAction<{ attorney?: NonNullable<Awaited<ReturnType<typeof serverClient.search.getAttorneyProfile>>>, timeFrame: typeof initialState.notifications.modals.scheduleWithinAllowed.timeFrame } | undefined>) => {
            state.modals.scheduleWithinAllowed = action.payload?.attorney ? {
                attorney: action.payload.attorney,
                timeFrame: action.payload.timeFrame,
                open: true
            } : {
                open: false
            }
        }
    }
})

export const { showLogoutModal, showScheduleWithinAllowedModal } = slice.actions
export default slice.reducer
