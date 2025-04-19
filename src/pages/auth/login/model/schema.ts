import * as yup from "yup";

export const registerSchema = yup.object().shape({
  email: yup
    .string()
    .email("Введите корректный email адрес")
    .required("Email обязателен для заполнения")
    .trim(),

  password: yup
    .string()
    .required("Пароль обязателен для заполнения")
    .min(8, "Пароль должен содержать минимум 8 символов"),
});
