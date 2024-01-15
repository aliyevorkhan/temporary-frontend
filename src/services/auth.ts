import axiosInstance from "@/utils/http";
import { User } from "./user";

export type LoginBody = {
  email: string;
  password: string;
};

export type LoginResponse = {
  access_token: string;
  refresh_token: string;
  user: User;
};

export type RegisterBody = {
  email: string;
  password1: string;
  password2: string;
};

export type RegisterResponse = {
  access_token: string;
  refresh_token: string;
  user: User;
};

export type ChangePasswordBody = {
  new_password1: string;
  new_password2: string;
};

type ChangePasswordResponse = {
  detail: string;
};

type ChangePasswordConfirmBody = {
  new_password1: string;
  new_password2: string;
  uid: string;
  token: string;
};

export const registerService = async (body: RegisterBody) => {
  const response = await axiosInstance.post<RegisterResponse>(
    "/auth/registration/",
    body
  );

  return response.data;
};

export const loginService = async (body: LoginBody) => {
  const response = await axiosInstance.post<LoginResponse>(
    "/auth/login/",
    body
  );

  return response.data;
};

export const changePasswordService = async (body: ChangePasswordBody) => {
  const response = await axiosInstance.post<ChangePasswordResponse>(
    "/auth/password/change/",
    body
  );

  return response.data;
};

export const passwordReset = async (email: string) => {
  const response = await axiosInstance.post("/auth/password/reset/", {
    email,
  });

  return response.data;
};

export const passwordResetConfirm = async (body: ChangePasswordConfirmBody) => {
  const response = await axiosInstance.post(
    "/auth/password/reset/confirm/",
    body
  );

  return response.data;
};

export const logoutService = async () => {
  const response = await axiosInstance.post("/auth/logout/");

  return response.data;
};

export const registerConfirm = async (token: string) => {
  const response = await axiosInstance.post(
    "/auth/registration/verify-email/",
    {
      key: token,
    }
  );

  return response.data;
};
