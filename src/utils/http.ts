import axios from "axios";
import { getToken } from "./get-token";
import { updateAccessToken } from "@/services/user";
import { deleteTokens, setTokens } from "./auth";

const axiosInstance = axios.create({
  baseURL: "https://api.simic.app",
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Change request data/error here
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken();

    if (token) {
      config.headers["Authorization"] = `Bearer ${token ? token : ""}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (originalRequest.url.includes("auth/token/refresh")) {
      console.log("canceleed");
      deleteTokens();

      return Promise.reject(error);
    }

    if (
      error.response.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url.includes("auth/token/refresh")
    ) {
      console.log("trying to refresh token");
      originalRequest._retry = true;

      try {
        const { refresh, access } = await updateAccessToken();
        setTokens({
          access,
          refresh,
        });

        originalRequest.headers["Authorization"] = `Bearer ${access}`;
        return axiosInstance(originalRequest);
      } catch (e) {}
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
