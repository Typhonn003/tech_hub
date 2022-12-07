import { yupResolver } from "@hookform/resolvers/yup";
import { createContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "../validations/LoginSchema";

export const UserContext = createContext({});

export function UserProvider({ children }) {

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors }} = useForm({
    mode: "onChange",
    resolver: yupResolver(loginSchema)
  })

  async function userLogin(userData) {

    try {
      
      setLoading(true)
      const response = await api.post("sessions", userData)      
      localStorage.setItem("user_token", response.data.token)

      navigate("/dashboard")
    }

    catch (error) {

      console.log(error)
      toast.error("Usuário ou senha incorreto")
    }

    finally {
      setLoading(false)
    }
  }

  return (
    <UserContext.Provider
      value={{ handleSubmit, userLogin, register, loading, errors }}
    >
      {children}
    </UserContext.Provider>
  );
}
