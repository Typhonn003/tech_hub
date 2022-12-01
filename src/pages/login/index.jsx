import { StyledDiv } from "./style";
import { Input } from "../../components/Input/Default";
import { PrimaryButton, StyledLink } from "../../components/Button/Default";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export function LoginPage() {

  const loginSchema = yup.object().shape({
    email: yup.string()
      .required("Email obrigatório*")
      .email("Email inválido"),
    password: yup.string()
      .required("Senha obrigatória*")
  })

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    mode: "onChange",
    resolver: yupResolver(loginSchema)
  })

  function onSubmitFunction(data) {
    console.log(data)
    reset()
  }
    
  return (
    <StyledDiv>
      <div className="container">
        <h1 className="title1">Kenzie Hub</h1>

        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <h2 className="title2">Login</h2>
            <Input 
              type="email" 
              id="email" 
              label="Email"
              register={register("email")} 
              placeholder="Digite seu email"
              error={errors.email?.message && <span aria-label="error">{errors.email.message}</span>}
            />            
            <Input
              type="password"
              id="password"
              label="Senha"
              register={register("password")}            
              placeholder="Digite sua senha"
              error={errors.password?.message && <span aria-label="error">{errors.password.message}</span>}
            />            
          <PrimaryButton type="submit">Entrar</PrimaryButton>

          <p>Ainda não possui uma conta?</p>

          <StyledLink to={"/register"}>Cadastre-se</StyledLink>
        </form>
      </div>
    </StyledDiv>
  );
}
