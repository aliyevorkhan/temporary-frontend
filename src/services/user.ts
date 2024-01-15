import { getRefreshToken } from "@/utils/auth";
import axiosInstance from "@/utils/http";

export type User = {
  pk: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
};

export const getUser: () => Promise<User> = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const accessToken = localStorage.getItem("access_token");
      const refreshToken = localStorage.getItem("refresh_token");

      if (!accessToken || !refreshToken) {
        reject("No token");
      }

      const token = accessToken;

      const response = await axiosInstance.get<User>("/auth/user/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      resolve(response.data);
    } catch (e: unknown) {
      if (e instanceof Error) {
        reject(e.message);

        return;
      }

      reject("Something went wrong");
    }
  });
};

export const updateAccessToken: () => Promise<{
  access: string;
  refresh: string;
}> = () => {
  return new Promise(async (resolve, reject) => {
    const refreshToken = getRefreshToken();

    try {
      const response = await axiosInstance.post<{
        access: string;
        refresh: string;
      }>("/auth/token/refresh/", {
        refresh: refreshToken,
      });

      resolve(response.data);
    } catch (e: unknown) {
      if (e instanceof Error) {
        reject(e.message);

        return;
      }

      reject("Something went wrong");
    }
  });
};
