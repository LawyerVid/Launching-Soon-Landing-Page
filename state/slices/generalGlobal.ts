import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "../initialState";

const slice = createSlice({
    name: "general",
    initialState: initialState.general as typeof initialState['general'],
    reducers: {
        setLoading: (state, action: PayloadAction<boolean | null>) => {
            state.loading = typeof action.payload === "boolean" ? action.payload : false
        }
    }
})

export const { setLoading } = slice.actions
export default slice.reducer
