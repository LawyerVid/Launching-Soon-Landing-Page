import { combineReducers, configureStore } from "@reduxjs/toolkit";
import Notifications from "./slices/notifications";
import GeneralReducer from './slices/generalGlobal'
import { persistReducer, persistStore } from "redux-persist"
import { initialState } from "./initialState";
import storage from 'redux-persist-indexeddb-storage';


const rootReducer = {
    notifications: Notifications,
    general: GeneralReducer
}


const makeConfiguredStore = () => configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    devTools: process.env.NODE_ENV !== "production" || true,
});

export const makeStore = (): ReturnType<typeof makeConfiguredStore> => {
    const isServer = typeof window === "undefined";
    if (isServer) {
        return makeConfiguredStore();
    } else {
        const persistConfig = {
            key: "root",
            whitelist: ["auth"],
            storage: storage("lawyerVid-coming_soon")
        };
        const persistedReducer = persistReducer(persistConfig, combineReducers(rootReducer));
        let store: any = configureStore({
            reducer: persistedReducer,
            devTools: process.env.NODE_ENV !== "production",
            // @ts-ignore
            preloadedState: initialState
        });
        store.__persistor = persistStore(store);
        return store;
    }
};

const store = makeStore()

declare global {
    interface Window {
        store: typeof store;
    }
}

if (process.env.NODE_ENV !== "production" && typeof window !== "undefined") {
    window.store = store;
}


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
