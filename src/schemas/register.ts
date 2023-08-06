import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required("Nome obrigatório*")
    .min(3, "Nome mínimo de 3 caracteres")
    .max(30, "Nome máximo de 30 caracteres"),

  email: yup.string().required("Email obrigatório*").email("Email inválido"),

  password: yup
    .string()
    .required("Senha obrigatória*")
    .matches(/(?=.*?[A-Z])/, "Precisa ter uma letra maiúscula")
    .matches(/(?=.*?[a-z])/, "Precisa ter uma letra minúscula")
    .matches(/(?=.*?[0-9])/, "Precisa conter um número")
    .matches(/(?=.*?[#?!@$%^&*-])/, "Precisa ter um caractere especial")
    .min(8, "Tamanho mínimo de 8 caracteres"),

  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "As senhas precisam ser iguais"),

  bio: yup
    .string()
    .required("Descrição obrigatória*")
    .min(10, "Pelo menos 10 caracteres")
    .max(50, "Máximo de 50 caracteres"),

  contact: yup
    .string()
    .required("Opção de contato obrigatório*")
    .min(10, "Pelo menos 10 caracteres")
    .max(50, "Máximo de 50 caracteres"),
});
