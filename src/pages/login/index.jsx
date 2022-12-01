import { StyledDiv } from "./style";
import { Input } from "../../components/Input/Default";
import { PrimaryButton, StyledLink } from "../../components/Button/Default";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from 'react-toastify';
import { useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function LoginPage() {

  const [ loading, setLoading ] = useState(false)
  
  const navigate = useNavigate()

  const loginSchema = yup.object().shape({
    email: yup.string()
      .required("Email obrigatório*")
      .email("Email inválido"),
    password: yup.string()
      .required("Senha obrigatória*")
  })

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

      toast.error("Usuário ou senha incorreto")
    }

    finally {
      setLoading(false)
    }
  }
    
  return (
    <StyledDiv>
      <div className="container">
        <h1 className="title1">Kenzie Hub</h1>

        <form onSubmit={handleSubmit(userLogin)}>
          <h2 className="title2">Login</h2>
            <Input 
              type="email" 
              id="email" 
              label="Email"
              register={register("email")} 
              placeholder="Digite seu email"
              error={errors.email?.message && <span aria-label="error">{errors.email.message}</span>}
              disabled={loading}
            />            
            <Input
              type="password"
              id="password"
              label="Senha"
              register={register("password")}            
              placeholder="Digite sua senha"
              error={errors.password?.message && <span aria-label="error">{errors.password.message}</span>}
              disabled={loading}
            />            
          <PrimaryButton type="submit" disabled={loading}>
            {loading ? "Entrando..." : "Entrar"}
          </PrimaryButton>

          <p>Ainda não possui uma conta?</p>

          <StyledLink to={"/register"}>Cadastre-se</StyledLink>
        </form>
      </div>
    </StyledDiv>
  );
}
