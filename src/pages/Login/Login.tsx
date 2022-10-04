import React from 'react';
import cls from '../Register/RegisterPage.module.scss'
import Form from "../../components/Form/Form";
import {SubmitHandler, useForm} from "react-hook-form";
import {ILoginUser, IRegisterUser} from "../../models/auth.models";
import {useLoginUserMutation} from "../../store/crm/auth/auth.api";
import {useReduxActions} from "../../hooks/useReduxActions";
import {useNavigate} from "react-router-dom";

const Login = () => {
  const [loginUser, {error: responseError, isLoading}] = useLoginUserMutation()
  const { registerOrLoginAction } = useReduxActions()
  const navigate = useNavigate()

  const {
    formState: {errors, isValid},
    reset,
    register,
    handleSubmit
  } = useForm<IRegisterUser>({
    mode: 'onChange'
  })

  const submitHandler: SubmitHandler<ILoginUser> = userData => {
    loginUser(userData)
      .unwrap()
      .then((res: {access: string, refresh: string})  => {
        registerOrLoginAction({
          username: userData.username,
          access: res.access,
          refresh: res.refresh
        })

        return res
      })
      .then(res => res.access && navigate('/'))
      .finally(reset)
  }

  return (
    <div className={cls.root}>
      <h1>Вход в личный кабинет</h1>
      <Form
        responseError={responseError}
        onSubmit={submitHandler}
        handleSubmit={handleSubmit}
        register={register}
        errors={errors}
        redirectRoute="/auth/register"
        submitButtonText="Войти в кабинет"
        redirectText="Регистрация"
        isValid={isValid}
      />
    </div>
  );
};

export default Login;
