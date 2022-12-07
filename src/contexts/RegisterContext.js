import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { api } from "../services/api";

export const RegisterContext = createContext({});

export function RegisterProvider({ children }) {

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const registerSchema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatório*")
      .min(3, "Nome mínimo de 3 caracteres")
      .max(30, "Nome máximo de 30 caracteres"),

    email: yup
      .string()
      .required("Email obrigatório*")
      .email("Email inválido"),

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
      .oneOf([yup.ref("password"), null], "As senhas precisam ser iguais"),

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

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onChange",
    resolver: yupResolver(registerSchema)
  });

  async function userRegister(userData) {

    try {
      
      setLoading(true)
      await api.post("users", userData)
      toast.success("Conta criada com sucesso")

      setTimeout(() => navigate("/login"), 4500)
    }

    catch (error) {

      console.error(error)
      toast.error("Email já cadastrado")
    }

    finally {

      setLoading(false)
    }
  }

  return (
    <RegisterContext.Provider
      value={{ loading, errors, register, handleSubmit, userRegister }}
    >
      {children}
    </RegisterContext.Provider>
  );
}
