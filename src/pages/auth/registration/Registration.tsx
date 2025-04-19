import { yupResolver } from "@hookform/resolvers/yup/src/yup.js";
import { Button, Form, Input, message } from "antd";
import { Controller, useForm } from "react-hook-form";
import { registerSchema } from "./model/schema";
import { RegistrationFormType } from "./types";
import { useCreateUserStore } from "./model/store";

export const Registration = () => {
  const { control, handleSubmit, reset } = useForm<RegistrationFormType>({
    resolver: yupResolver(registerSchema),
  });

  const createUser = useCreateUserStore((state) => state.fetchCreateuser);

  const onSubmit = (data: RegistrationFormType) => {
    createUser({ email: data.email, password: data.password });
    reset();
    message.success("Вы успешно зарегестрировались!");
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
        <Controller
          name="confirmPassword"
          control={control}
          render={({
            field: { onChange, value },
            fieldState: { error, invalid },
          }) => (
            <Form.Item
              help={error ? error.message : undefined}
              validateStatus={error ? "error" : undefined}
            >
              <Input onChange={onChange} value={value} type="password" />
            </Form.Item>
          )}
        />
        <Button type="primary" htmlType="submit">
          Зарегестрироваться
        </Button>
      </Form>
    </div>
  );
};
