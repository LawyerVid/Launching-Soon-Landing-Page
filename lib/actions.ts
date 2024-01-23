import { showLogoutModal as showLoModal } from "#/state/slices/notifications"
import { setLoading } from "#/state/slices/generalGlobal"
import store from "#/state/store"


export const showLogoutModal = () => {
    store.dispatch(showLoModal(true))
}

export const setLoadingState = (loading: boolean = false) => {
    store.dispatch(setLoading(loading))
}


export const showUserSubmittedMsgModal = (msg?: string) => {
    console.log("msg: ", msg)
}

