import axios from "axios";
import { Constants } from "../constant/Constants";
export const ApiManager = {
    get: (url) => {
        const axiosConfig = {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization":"Bearer 123"
            }
        };
        return axios.get(Constants.API_URL + url, axiosConfig);
    },
    post: (url, data) => {
        const axiosConfig = {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization":"Bearer 123"
            },
        };
        return axios.post(Constants.API_URL + url, data, axiosConfig);
    },
    put: (url, data) => {
        const axiosConfig = {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization":"Bearer 123"
            },
        };
        return axios.put(Constants.API_URL + url, data, axiosConfig);
    },
    delete: (url) => {
        const axiosConfig = {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization":"Bearer 123"
            },
        };
        return axios.delete(Constants.API_URL + url, axiosConfig);
    },
    patch: (url, data) => {
        const axiosConfig = {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization":"Bearer 123"
            },
        };
        return axios.patch(Constants.API_URL + url, data, axiosConfig);
    },
    postFormData: (url, data) => {
        const axiosConfig = {
            headers: {
                "Content-Type": "multipart/form-data",
                "Accept": "application/json",
                "Authorization":"Bearer 123"
            },
        };
        return axios.post(Constants.API_URL + url, data, axiosConfig);
    },
};