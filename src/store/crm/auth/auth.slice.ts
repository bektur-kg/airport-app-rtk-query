import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {
  AuthLocalKeys,
  ILoginPayload,
  ILoginUser,
  IRegisterPayload,
  IRegisterUserResponse
} from "../../../models/auth.models"

interface authSliceState {
  username: string
  isAuthorization: boolean
  access: string
  refresh: string
}

const initialState: authSliceState = {
  username: localStorage.getItem(AuthLocalKeys.username) ?? '',
  isAuthorization: !!localStorage.getItem(AuthLocalKeys.isAuth),
  access: localStorage.getItem(AuthLocalKeys.access) ?? '',
  refresh: localStorage.getItem(AuthLocalKeys.refresh) ?? ''
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

    registerOrLoginAction: (state, action: PayloadAction<IRegisterPayload>) => {
      state.username = action.payload.username
      state.isAuthorization = !!action.payload.access
      state.access = action.payload.access
      state.refresh = action.payload.refresh

      localStorage.setItem(AuthLocalKeys.username, action.payload.username)
      localStorage.setItem(AuthLocalKeys.access, action.payload.access)
      localStorage.setItem(AuthLocalKeys.refresh, action.payload.refresh)
    }
  }
})

export const authReducer = authSlice.reducer
export const authActions = authSlice.actions