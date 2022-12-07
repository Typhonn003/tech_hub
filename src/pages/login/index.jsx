import { StyledDiv } from "./style";
import { Input } from "../../components/Input/Default";
import { PrimaryButton, StyledLink } from "../../components/Button/Default";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";


export function LoginPage() {

  const { handleSubmit, userLogin, register, loading, errors } = useContext(UserContext)
    
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
