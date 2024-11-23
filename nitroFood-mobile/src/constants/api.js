import axios from "axios";

const api = axios.create({
    baseURL: "http://192.168.100.129:3001",
    timeout: 10000
});

export default api;