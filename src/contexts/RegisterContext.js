import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { api } from "../services/api";
import { registerSchema } from "../validations/RegisterSchema";

export const RegisterContext = createContext({});

export function RegisterProvider({ children }) {

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();  

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
