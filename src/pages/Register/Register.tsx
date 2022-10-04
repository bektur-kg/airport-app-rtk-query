import React from 'react'
import Form from "../../components/Form/Form"
import cls from './RegisterPage.module.scss'
import {SubmitHandler, useForm} from "react-hook-form"
import {IRegisterUser} from "../../models/auth.models"
import {useRegisterUserMutation} from "../../store/crm/auth/auth.api"
import {useReduxActions} from "../../hooks/useReduxActions"
import {useNavigate} from "react-router-dom";

const Register = () => {
  const [registerUser, {isLoading, error: responseError}] = useRegisterUserMutation()
  const { registerOrLoginAction } = useReduxActions()
  const navigate = useNavigate()
  const {
    register,
    reset,
    formState: {errors, isValid},
    handleSubmit,
  } = useForm<IRegisterUser>({
    mode: 'onChange'
  })


  const submitHandler: SubmitHandler<IRegisterUser> = userData => {
    registerUser(userData)
      .unwrap()
      .then((res: {access: string, refresh: string})  => {
        registerOrLoginAction({
          username: userData.username,
          access: res.access,
          refresh: res.refresh
        })
        return res
      })
      // .then(res => res && navigate('/'))
      .finally(reset)
  }


  return (
    <div className={cls.root}>
      <h1>Регистрация</h1>
      <Form
        onSubmit={submitHandler}
        handleSubmit={handleSubmit}
        submitButtonText="Отправить"
        register={register}
        errors={errors}
        redirectRoute="/auth/login"
        redirectText="Войти в кабинет"
        isValid={isValid}
        responseError={responseError}
      />
    </div>
  )
}

export default Register
