import axios, { InternalAxiosRequestConfig } from "axios"

const api = axios.create({
    baseURL: "http://localhost:4200/api",
  headers: {
    "Content-Type": "application/json",
  },
})
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Retrieve your token from localStorage, sessionStorage, or a state manager
    const token = localStorage.getItem('access_token');

    // If the token exists and the request doesn't already have an Authorization header
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // Handle request configuration errors
    return Promise.reject(error);
  }
);

export default api