import axios, {AxiosInstance} from "axios";

function axiosClient(): AxiosInstance {
    const client = axios.create({
        baseURL:"http://localhost:8000/api",
        timeout: 60000,
        withCredentials: false
    })
    return client;
};

export default axiosClient;