import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AuthFormData } from '../../types/authTypes';

const baseURL = process.env.REACT_APP_JSON_SERVER_API_URL;

interface NotificationResponse {
  id: string;
  title: string;
  description: string;
  created: string;
}
export const authApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    logIn: builder.mutation<any, AuthFormData>({
      query: (data) => ({
        url: '/login',
        method: 'POST',
        body: data,
      }),
    }),
    getMessage: builder.query<NotificationResponse, number>({
      query: (id) => ({
        url: `/notifications/${id}`,
      }),
    }),
  }),
});

export const { useLogInMutation, useGetMessageQuery } = authApi;
