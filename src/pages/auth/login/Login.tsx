import { yupResolver } from "@hookform/resolvers/yup/src/yup.js";
import { Button, Form, Input, message } from "antd";
import { Controller, useForm } from "react-hook-form";
import { registerSchema } from "./model/schema";
import { RegistrationFormType } from "./types";
import { useLoginUserStore } from "./model/store";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@context/auth/AuthContext";

export const Login = () => {
  const { control, handleSubmit, reset } = useForm<RegistrationFormType>({
    resolver: yupResolver(registerSchema),
  });

  const createUser = useLoginUserStore((state) => state.fetchLoginuser);
  const navigate = useNavigate();

  const { setToken } = useAuth();

  const onSubmit = async (data: RegistrationFormType) => {
    const token = await createUser({
      email: data.email,
      password: data.password,
    });
    reset();
    console.log("token", token);
    setToken(token.access_token);
    message.success("Вы вошли!");
    navigate("/");
  };

  return (
    <div>
      <Form onFinish={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Form.Item
              help={error ? error.message : undefined}
              validateStatus={error ? "error" : undefined}
            >
              <Input
                onChange={onChange}
                value={value}
                type="email"
                placeholder="Введите ваш email"
              />
            </Form.Item>
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Form.Item
              help={error ? error.message : undefined}
              validateStatus={error ? "error" : undefined}
            >
              <Input onChange={onChange} value={value} type="password" />
            </Form.Item>
          )}
        />
        <Button type="primary" htmlType="submit">
          Войти
        </Button>
      </Form>
    </div>
  );
};
