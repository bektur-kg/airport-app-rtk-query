import React, {FC} from 'react'
import cls from "./Form.module.scss"
import FormInput from "../FormInput/FormInput"
import {IRegisterUser} from "../../models/auth.models"
import {FieldErrors, UseFormHandleSubmit, UseFormRegister} from "react-hook-form"
import Button from "../Button/Button";
import {useNavigate} from "react-router-dom";
import {FetchBaseQueryError} from "@reduxjs/toolkit/query";
import {SerializedError} from "@reduxjs/toolkit";

interface IFormProps {
  onSubmit: (data: IRegisterUser) => void
  handleSubmit: UseFormHandleSubmit<IRegisterUser>
  register: UseFormRegister<IRegisterUser>
  redirectText: string
  redirectRoute: string
  errors: FieldErrors<IRegisterUser>
  isValid: boolean
  submitButtonText: string
  responseError: FetchBaseQueryError | SerializedError | undefined
}


const Form: FC<IFormProps> = (
  {
    onSubmit,
    handleSubmit,
    register,
    redirectText,
    redirectRoute,
    errors,
    isValid,
    submitButtonText,
    responseError
  }) => {
  const navigate = useNavigate()


  return (
    <form
      className={cls.root}
      onSubmit={handleSubmit(onSubmit)}
    >
      {
        responseError && (
          <ul className={cls.errorList}>
            {
              //@ts-ignore
              responseError.data?.username?.map((e, i) => (
                <li key={e}>{++i}) {e}</li>
              ))
            }
            {
              //@ts-ignore
              responseError.data?.detail && <li>{responseError.data?.detail}</li>
            }
          </ul>
        )
      }

      <FormInput
        text="Имя пользователя*"
        inputType="text"
        register={register}
        regexName="username"
        registerName="username"
        inputError={errors.username}
      />

      <FormInput
        text="Пароль*"
        inputError={errors.password}
        inputType="password"
        register={register}
        regexName="Password"
        registerName="password"
      />

      <div className={cls.buttonGroup}>
        <Button
          type="submit"
          text={submitButtonText}
          isValid={isValid}
        />

        <button
          className={cls.redirect}
          onClick={() => navigate(redirectRoute)}
        >
          {redirectText}
        </button>

      </div>

    </form>
  )
}


export default Form
