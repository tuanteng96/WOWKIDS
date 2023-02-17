import axios from 'axios';
import { parse, stringify } from 'qs'
import APPS from "../js/settings";
import store from '../js/store';

const axiosClient = axios.create({
    baseURL: APPS.DOMAIN_API,
    headers: {
        'content-type': 'application/json',
    },
    paramsSerializer: {
        encode: parse,
        serialize: stringify,
    },
});

axiosClient.interceptors.request.use(
    (config) => {
        const { Token } = store.state.Auth;
        if (Token) {
            config.headers.Authorization = `Bearer ${Token}`;
        }
        return config;
    },
    (err) => Promise.reject(err)
);

axiosClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Check Error Token
        return Promise.reject(error);
    }
);

export default axiosClient;