import { createApi } from "@reduxjs/toolkit/query/react";
import { IGetDriversResponse } from "@/types";
import { IDriver, IRace } from "@/types";
import { delayedFetchBaseQuery } from "@/axios/axiosBaseQuery";

interface IResponseData {
    limit: string;
    offset: string;
    total: string;
}

export interface IDriversResponse extends IResponseData {
    drivers: IDriver[];
}

export interface IRacesResponse extends IResponseData {
    races: IRace[];
}

export const driversApiSlice = createApi({
    reducerPath: "driversApiSlice",
    baseQuery: delayedFetchBaseQuery,
    endpoints: builder => ({
        getDrivers: builder.query<IDriversResponse, { limit?: number, offset: number }>({
            query: ({ limit, offset }) => ({
                url: `/drivers.json?limit=${limit ?? 20}&offset=${offset}`
            }),
            transformResponse: (res: IGetDriversResponse) => {
                const data = res?.MRData;
                return {
                    limit: data.limit,
                    offset: data.offset,
                    total: data.total,
                    drivers: data.DriverTable.Drivers
                };
            }
        }),
        getRaces: builder.query<IRacesResponse, { limit?: number, offset: number, driverId: string }>({
            query: ({ limit, offset, driverId }) => ({
                url: `/drivers/${driverId}/races.json?limit=${limit ?? 20}&offset=${offset}`
            }),
            transformResponse: (res: IGetDriversResponse) => {
                const data = res?.MRData;
                return {
                    limit: data.limit,
                    offset: data.offset,
                    total: data.total,
                    races: data?.RaceTable?.Races
                };
            }
        })
    })
});

export const { useLazyGetDriversQuery, useLazyGetRacesQuery } = driversApiSlice;