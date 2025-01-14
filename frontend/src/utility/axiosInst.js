import env from "@/env";
import axios from "axios";

const axiosInst = axios.create({
    // baseURL: 'http://localhost:7777',
    baseURL: env.api.MAIN_API_URL,
    timeout: 2500
})

export default axiosInst