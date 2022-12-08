import * as yup from "yup";

export const newTechSchema = yup.object().shape({
  title: yup
    .string()
    .required("Nome obrigatório*")
    .max(16, "Nome máximo de 16 caracteres"),
});
