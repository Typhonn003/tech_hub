import { StyledDiv, StyledSpacer } from "./style";
import { Input } from "../../components/Input/Default";
import { PrimaryButton, StyledLink } from "../../components/Button/Default";

export function LoginPage() {
    
  return (
    <StyledDiv>
      <div className="container">
        <h1 className="title1">Kenzie Hub</h1>

        <form>
          <h2 className="title2">Login</h2>
          <StyledSpacer>
            <label htmlFor="email">Email</label>
            <Input type="text" id="email" placeholder="Digite seu email" />
          </StyledSpacer>
          <StyledSpacer>
            <label htmlFor="password">Senha</label>
            <Input
              type="password"
              id="password"
              placeholder="Digite sua senha"
            ></Input>
          </StyledSpacer>
          <PrimaryButton type="submit">Entrar</PrimaryButton>

          <p>Ainda não possui uma conta?</p>

          <StyledLink to={"/register"}>Cadastre-se</StyledLink>
        </form>
      </div>
    </StyledDiv>
  );
}
