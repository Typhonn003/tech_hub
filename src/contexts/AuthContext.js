import { yupResolver } from "@hookform/resolvers/yup";
import { createContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "../validations/LoginSchema";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {

  const [loading, setLoading] = useState(false);
  const [loadUserLoading, setLoadUserLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [userTechs, setUserTechs] = useState([])
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    mode: "onChange",
    resolver: yupResolver(loginSchema),
  });

  useEffect(() => {

    async function loadUser() {

      const token = localStorage.getItem("user_token");

      if (!token) {

        setLoadUserLoading(false);
        return;
      }

      try {

        api.defaults.headers.common.authorization = `Bearer ${token}`;

        const response = await api.get("profile");

        setUser(response.data);
        setUserTechs(response.data.techs)
      } catch (error) {

        console.error(error);
      } finally {

        setLoadUserLoading(false);
      }
    }

    loadUser();
  }, []);

  async function login(userData) {

    try {
      
      setLoading(true);
      const response = await api.post("sessions", userData);
      setUserTechs(response.data.user.techs)
      setUser(response.data.user);
      localStorage.setItem("user_token", response.data.token);

      api.defaults.headers.common.authorization = `Bearer ${response.data.token}`;
      
      setUserTechs(response.data.user.techs)
      reset()
      navigate("/dashboard");
    } catch (error) {

      console.log(error);
      toast.error("Usuário ou senha incorreto");
    } finally {
      
      setLoading(false);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        handleSubmit,
        login,
        register,
        loading,
        errors,
        user,
        loadUserLoading,
        userTechs,
        setUserTechs
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
