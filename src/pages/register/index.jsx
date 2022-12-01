import { StyledDiv, StyledHeader } from "./style";
import { StyledLink } from "../../components/Button/Medium";
import { Input } from "../../components/Input/Default";
import { Select } from "../../components/Input/Select";
import { PrimaryButton } from "../../components/Button/Default";

export function RegisterPage() {

  return (
    <StyledDiv>
      <div className="container">
        <StyledHeader>
          <h1 className="title1">Kenzie Hub</h1>
          <StyledLink to={"/login"}>Voltar</StyledLink>
        </StyledHeader>

        <main>
          <form>
            <h2 className="title2">Crie sua conta</h2>
            <p>Rapido e grátis, vamos nessa!</p>
            <Input
              type="text"
              id="name"
              label="Nome"
              placeholder="Digite seu nome"
            />
            <Input
              type="email"
              id="email"
              label="Email"
              placeholder="Digite seu email"
            />
            <Input
              type="password"
              id="password"
              label="Senha"
              placeholder="Digite sua senha"
            />
            <Input
              type="password"
              id="confirm_password"
              label="Confirmar senha"
              placeholder="Confirme sua senha"
            />
            <Input
              type="text"
              id="bio"
              label="Bio"
              placeholder="Fale sobre você"
            />
            <Input
              type="tel"
              id="contact"
              label="Contato"
              placeholder="Opção de contato"
            />
            <Select id="course_module" label="Selecionar módulo">
              <option value="Primeiro Módulo">Primeiro módulo</option>
              <option value="Segundo módulo">Segundo módulo</option>
              <option value="Terceiro módulo">Terceiro módulo</option>
            </Select>
            <PrimaryButton type="submit">Cadastrar</PrimaryButton>
          </form>
        </main>
      </div>
    </StyledDiv>
  );
}
