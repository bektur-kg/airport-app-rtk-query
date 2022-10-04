import {configureStore} from "@reduxjs/toolkit"
import {authReducer} from "./crm/auth/auth.slice"
import {authApi} from "./crm/auth/auth.api"
import {airportsApi} from "./crm/airports/airports.api"

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [airportsApi.reducerPath]: airportsApi.reducer,
    auth: authReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(authApi.middleware)
    .concat(airportsApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>