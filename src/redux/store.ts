import { driversApiSlice } from "@/api/driversApiSlice";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistStore } from "redux-persist";
import DriversActionsSlice from "./slices/driversStateSlice";

const rootReducer = combineReducers({
    DriversActionsSlice,
    [driversApiSlice.reducerPath]: driversApiSlice.reducer
});

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware({ serializableCheck: false }).concat(
            driversApiSlice.middleware,
        );
    }
});

export type TRootStateType = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
export default store;
