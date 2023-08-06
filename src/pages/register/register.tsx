import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../schemas";
import { useRegister } from "../../hooks";
import { StyledDiv, StyledHeader, StyledSpacer } from "./style";
import {
  Input,
  PrimaryButton,
  Select,
  StyledLinkMedium,
} from "../../components";

export const RegisterPage = () => {
  const { registerUser, loading } = useRegister();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(registerSchema),
  });

  return (
    <StyledDiv>
      <div className="container">
        <StyledHeader>
          <h1 className="title1">Kenzie Hub</h1>
          <StyledLinkMedium to={"/login"}>Voltar</StyledLinkMedium>
        </StyledHeader>

        <main>
          <form onSubmit={handleSubmit(registerUser)}>
            <h2 className="title2">Crie sua conta</h2>
            <p>Rapido e grátis, vamos nessa!</p>
            <div>
              <StyledSpacer>
                <Input
                  type="text"
                  id="name"
                  label="Nome"
                  register={register("name")}
                  placeholder="Digite seu nome"
                  error={
                    errors.name?.message && (
                      <span aria-label="error">{errors.name.message}</span>
                    )
                  }
                  disabled={loading}
                />
                <Input
                  type="email"
                  id="email"
                  label="Email"
                  register={register("email")}
                  placeholder="Digite seu email"
                  error={
                    errors.email?.message && (
                      <span aria-label="error">{errors.email.message}</span>
                    )
                  }
                  disabled={loading}
                />
                <Input
                  type="password"
                  id="password"
                  label="Senha"
                  register={register("password")}
                  placeholder="Digite sua senha"
                  error={
                    errors.password?.message && (
                      <span aria-label="error">{errors.password.message}</span>
                    )
                  }
                  disabled={loading}
                />
                <Input
                  type="password"
                  id="confirm_password"
                  label="Confirmar senha"
                  register={register("confirm_password")}
                  placeholder="Confirme sua senha"
                  error={
                    errors.confirm_password?.message && (
                      <span aria-label="error">
                        {errors.confirm_password.message}
                      </span>
                    )
                  }
                  disabled={loading}
                />
              </StyledSpacer>
              <StyledSpacer>
                <Input
                  type="text"
                  id="bio"
                  label="Bio"
                  register={register("bio")}
                  placeholder="Fale sobre você"
                  error={
                    errors.bio?.message && (
                      <span aria-label="error">{errors.bio.message}</span>
                    )
                  }
                  disabled={loading}
                />
                <Input
                  type="text"
                  id="contact"
                  label="Contato"
                  register={register("contact")}
                  placeholder="Opção de contato"
                  error={
                    errors.contact?.message && (
                      <span aria-label="error">{errors.contact.message}</span>
                    )
                  }
                  disabled={loading}
                />
                <Select
                  id="course_module"
                  label="Selecionar módulo"
                  register={register("course_module")}
                  disabled={loading}
                >
                  <option value="Primeiro Módulo">Primeiro módulo</option>
                  <option value="Segundo módulo">Segundo módulo</option>
                  <option value="Terceiro módulo">Terceiro módulo</option>
                  <option value="Quarto módulo">Quarto módulo</option>
                  <option value="Quinto módulo">Quinto módulo</option>
                  <option value="Sexto módulo">Sexto módulo</option>
                </Select>
                <PrimaryButton type="submit" disabled={loading}>
                  {loading ? "Cadastrando..." : "Cadastrar"}
                </PrimaryButton>
              </StyledSpacer>
            </div>
          </form>
        </main>
      </div>
    </StyledDiv>
  );
};
