export enum AuthLocalKeys {
  username = 'username',
  email = 'email',
  password = 'password',
  isAuth = 'access',
  access = 'access',
  refresh = 'refresh'
}

export interface IRegisterUserResponse {
  access: string
  refresh: string
}

export interface IRegisterUser {
  username: string
  password: string
}

export interface IRegisterPayload {
  username: string
  access: string
  refresh: string
}

export interface ILoginUser {
  username: string
  password: string
}

export interface ILoginPayload {
  username: string
  access: string
  refresh: string
}