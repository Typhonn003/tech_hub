import { StyledDiv } from "./style";
import { Input, PrimaryButton, StyledLink } from "../../components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../schemas";
import { useAuth } from "../../hooks";

export function LoginPage() {
  const { login, loading } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onChange",
  });

  return (
    <StyledDiv>
      <div className="container">
        <h1 className="title1">Kenzie Hub</h1>

        <form onSubmit={handleSubmit(login)}>
          <h2 className="title2">Login</h2>
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
