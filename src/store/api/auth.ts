import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type RegisterCredentials = {
  userName: string;
  email: string;
  password: string;
};

type RegisterResponse = {
  message: string;
  result: {
    id: string;
    userName: string;
    email: string;
    password: string;
    createdAt: string;
    updatedAt: string;
  };
};

type LoginCredentials = {
  email: string;
  password: string;
};

type LoginResponse = {
  message: string;
  token: string;
};

const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/auth" }),
  endpoints: (builder) => ({
    register: builder.mutation<RegisterResponse, RegisterCredentials>({
      query: (credentials) => ({
        url: "/user",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    login: builder.mutation<LoginResponse, LoginCredentials>({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: { ...credentials },
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;

export default authApi;
