import { LINKS } from "@/config";
import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

const axiosInstance: AxiosInstance = axios.create({
    baseURL: LINKS.BASE_URL
});

axiosInstance.interceptors.request.use((config) => {
    config.params = { ...config.params };
    return config;
}, (error) => {
    return Promise.reject(error);
});

axiosInstance.interceptors.response.use((response: AxiosResponse) => {
    return response;
}, (error: AxiosError) => {
    const errorStatus = error.response?.status;
    console.log("Axios error: ", errorStatus)
    return Promise.reject(error);
});

export default axiosInstance;
