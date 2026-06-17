import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5001/api",
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log("API Error Response:", error.response?.status, error.response?.data);
    return Promise.reject(error);
  }
);

export default api;
