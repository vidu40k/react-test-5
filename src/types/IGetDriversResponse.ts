import { IDriver } from "./IDriver";
import { IRace } from "./IRace";

export interface IDriverTable {
    Drivers: IDriver[];
}

export interface IMRData {
    xmlns: string;
    series: string;
    url: string;
    limit: string;
    offset: string;
    total: string;
    DriverTable: IDriverTable;
    RaceTable: {
        Races: IRace[]
    };
}

export interface IGetDriversResponse {
    MRData: IMRData;
}