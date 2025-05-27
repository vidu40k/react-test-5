import axiosInstance from "@/axios/axiosInstance";
import { LINKS } from "@/config";
import { FetchArgs, BaseQueryApi, fetchBaseQuery, BaseQueryFn } from "@reduxjs/toolkit/query";

export const delayedFetchBaseQuery: any = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: {}) => {
    await new Promise(resolve => setTimeout(resolve, 400)); // Искусственная задержка для анимации дозагрузки элементов
    return fetchBaseQuery({ baseUrl: LINKS.BASE_URL })(args, api, extraOptions);
};

export const axiosBaseQuery: BaseQueryFn<{ url: string; method?: string; body?: any }> =
    async ({ url, method = "GET", body }) => {
        try {
            const result = await axiosInstance({
                url,
                method,
                data: body
            });
            return { data: result.data };
        } catch (error: any) {
            return { error: error.response?.data || error.message };
        }
    };


