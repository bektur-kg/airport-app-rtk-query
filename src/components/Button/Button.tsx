import React, {FC} from 'react'
import cls from './Button.module.scss'

interface IButton {
  text: string
  onClick?: () => void
  type?: 'submit' | 'reset' | 'button'
  isValid?: boolean
}

const Button: FC<IButton> = (
  {
    text,
    onClick,
    type,
    isValid
  }) => {
  return (
    <button
      disabled={!isValid}
      className={cls.root}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button
