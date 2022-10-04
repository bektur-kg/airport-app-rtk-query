import {FieldError, UseFormRegister} from "react-hook-form";
import {IRegisterUser} from "./auth.models";

export interface IFormInput {
  text: string
  inputType: string
  register: UseFormRegister<IRegisterUser>
  inputError: FieldError | undefined
  registerName: 'username' | 'password',
  regexName: 'Email' | 'Password' | 'username'
}

export interface ICardProp {
  id: number;
  name: string;
  ident: string;
  local_code: string;
  region: string;
  type: string;
  country: string;
}