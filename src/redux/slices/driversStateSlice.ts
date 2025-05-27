import { IDriver } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TDriversStateSlice = {
    driverInfo: IDriver | null;
};

const initialState: TDriversStateSlice = {
    driverInfo: null
};

const DriversStateSlice = createSlice({
    name: "DriverSlice",
    initialState,
    reducers: {
        _setDriverInfo(state, action: PayloadAction<IDriver | null>) {
            state.driverInfo = action.payload;
        },
    }
});

export const DriversStateActions = DriversStateSlice.actions;
export type TDriversStateSliceKeys = keyof TDriversStateSlice;
export default DriversStateSlice.reducer;
