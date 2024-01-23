import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "../initialState";


const slice = createSlice({
    name: "notifications",
    initialState: initialState.notifications as typeof initialState['notifications'],
    reducers: {
        showLogoutModal: (state, action: PayloadAction<boolean | undefined>) => {
            state.modals.logout = typeof action.payload === "boolean" ? action.payload : true
        },
    }
})

export const { showLogoutModal } = slice.actions
export default slice.reducer
