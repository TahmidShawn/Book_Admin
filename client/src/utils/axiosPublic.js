import axios from "axios";

const axiosPublic = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL || "http://localhost:3000/api/v1",
    withCredentials: true,
});

export default axiosPublic;
