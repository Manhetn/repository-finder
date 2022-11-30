import { IRepository, IUser, ServerResponse } from './../../models/models';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const githubApi = createApi({
  reducerPath: 'github/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com/'
  }),
  endpoints: (build) => ({
    searchUser: build.query<IUser[], string>({
      query: (search: string) => ({
        url: 'search/users',
        params: {
          q: search,
          per_page: 10
        }
      }),
      transformResponse: (response: ServerResponse) => response.items
    }),
    getUserRepos: build.query<IRepository[], string>({
      query: (userName: string) => ({
        url: `users/${userName}/repos`
      })
    })
  }),
  refetchOnFocus: true
});

export const { useSearchUserQuery, useLazyGetUserReposQuery, useGetUserReposQuery } = githubApi;

export default githubApi;
