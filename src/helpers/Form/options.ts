import { aliasRegExp, emailRegExp } from './regex'

export const required = 'Обязательное поле'

export const Rules = {
  Email: {
    required: false,
    pattern: {
      value: emailRegExp,
      message: 'Некорректный email',
    },
  },

  Password: {
    required,
    minLength: {
      value: 6,
      message: 'Минимум 6 символов',
    },
  },

  username: {
    required,
    minLength: {
      value: 5,
      message: 'Минимум 5 символов',
    },
    pattern: {
      value: aliasRegExp,
      message: 'Только цифры и латинские буквы',
    },
  },


}