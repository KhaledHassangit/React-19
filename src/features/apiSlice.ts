/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '../app/api';

export const jsonPlaceholderApi = createApi({
    reducerPath: 'jsonPlaceholderApi',
    baseQuery: axiosBaseQuery(),
    endpoints: (builder) => ({
      getPosts: builder.query<any[], void>({
        query: () => ({
          url: '/posts',
          method: 'GET',
        }),
      }),
      addPost: builder.mutation<any, { title: string; body: string; userId: number }>({
        query: (newPost) => ({
          url: '/posts',
          method: 'POST',
          data: newPost,
        }),
      }),
      updatePost: builder.mutation<any, { id: number; data: any }>({
        query: ({ id, data }) => ({
          url: `/posts/${id}`,
          method: 'PUT',
          data,
        }),
      }),
      deletePost: builder.mutation<any, number>({
        query: (id) => ({
          url: `/posts/${id}`,
          method: 'DELETE',
        }),
      }),
    }),
  });
  
export const {  useGetPostsQuery,
    useAddPostMutation,
    useUpdatePostMutation,
    useDeletePostMutation,} = jsonPlaceholderApi;
