import { globalState } from "./initial/global";
import { initialNotificationState } from "./initial/notifications";

export const initialState = {
    notifications: initialNotificationState,
    general: globalState
}
