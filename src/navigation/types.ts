import { IDriver } from "@/types";
import { ScreenNames } from "./screenNames";

export type RootStackParamList = {
    [ScreenNames.DriversList]: undefined;
    [ScreenNames.DriverDetails]: { driverInfo?: IDriver } | undefined;
    [ScreenNames.RacesList]: { driverId: string, driverName: string };
};