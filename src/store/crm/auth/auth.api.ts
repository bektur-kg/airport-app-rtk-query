import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import {IRegisterUser, IRegisterUserResponse} from "../../../models/auth.models";

export const authApi = createApi({
  reducerPath: 'airport/auth',
  baseQuery: fetchBaseQuery({
   baseUrl: 'http://docker.digital-spectr.ru:8888/api'
  }),
  endpoints: (build) => ({

    registerUser: build.mutation<IRegisterUserResponse, IRegisterUser>({
      query: (userData) => ({
        url: 'auth/register',
        method: 'POST',
        body: userData,
      })
    }),

    loginUser: build.mutation({
      query: (userData) => ({
        url: 'auth/login',
        method: 'POST',
        body: userData
      })
    }),

  })
})

export const {  useRegisterUserMutation, useLoginUserMutation } = authApi