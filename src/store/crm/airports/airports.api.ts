import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import {
  IAirport,
  IResponseCommentGet,
  IResponseCommentPost,
  IResponseDetail,
  IServerResponse,
  ITransformedData
} from "../../../models/airports.models"
import {RootState} from "../../index";

export const airportsApi = createApi({
  reducerPath: 'airports/all',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://docker.digital-spectr.ru:8888/api',
    prepareHeaders: (headers, {getState}) => {
      const access = (getState() as RootState).auth.access

      // If we have an access set in state, let's assume that we should be passing it.
      if (access) {
        headers.set('authorization', `Bearer ${access}`)
      }

      return headers
    },

  }),

  tagTypes: ['COMMENT'],

  endpoints: (build) => ({

    getAirports: build.query<IServerResponse<IAirport>, { search: string, page: number }>({

      query: ({search, page}) => ({
        url: 'airports',
        params: {
          count: 10,
          page,
        }
      }),
    }),

    getExactAirport: build.query<ITransformedData, string>({
      query: (id) => ({
        url: `airports/${id}`
      }),

      transformResponse: (baseQueryReturnValue: IResponseDetail) => ({
        airport_name: baseQueryReturnValue.name,
        details: Object.entries(baseQueryReturnValue)
      })
    }),

    createComment: build.mutation<IResponseCommentPost, { commentText: string, airportId: string }>({
      query: ({commentText, airportId}) => ({
        url: `airports/${airportId}/comments`,
        method: 'POST',
        body: {
          comment: commentText
        },
        headers: {
          'Content-type': 'application/json'
        }
      }),
      invalidatesTags: ['COMMENT']
    }),

    getAirportComments: build.query<IResponseCommentGet, { airportId: string, page: number }>({
      query: ({airportId, page}) => ({
        url: `airports/${airportId}/comments`,
        params: {
          count: 7,
          page,
        }
      }),
      providesTags: ['COMMENT'],
    })

  })
})

export const {
  useGetAirportsQuery,
  useGetExactAirportQuery,
  useCreateCommentMutation,
  useGetAirportCommentsQuery
} = airportsApi