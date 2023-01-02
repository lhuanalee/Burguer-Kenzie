import * as yup from "yup";

export const formSchemaRegister = yup.object({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup
    .string()
    .min(8, "No mínimo 8 caracteres")
    .required("Senha obrigatória"),
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref("password")],
      "A confirmação de senha precisa ser a mesma que a senha"
    ),
});
