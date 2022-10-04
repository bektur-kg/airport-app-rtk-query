import React, {FC} from 'react'
import cls from "./FormInput.module.scss"

import {IFormInput} from "../../models/components.models";
import {Rules} from "../../helpers/Form/options";


const FormInput: FC<IFormInput> = ({text, inputType, register, registerName, regexName, inputError}) => {

  return (
    <label className={cls.root}>
      <span className={cls.errorMessage}>{inputError && inputError.message}</span>
      <input
        type={inputType}
        placeholder={text}
        {...register(registerName, Rules[regexName] )}
      />
    </label>
  )
}

export default FormInput
