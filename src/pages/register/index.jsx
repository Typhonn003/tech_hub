import { StyledDiv, StyledHeader } from "./style";
import { StyledLink } from "../../components/Button/Medium";
import { Input } from "../../components/Input/Default";
import { Select } from "../../components/Input/Select";
import { PrimaryButton } from "../../components/Button/Default";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from 'react-toastify';

export function RegisterPage() {

  const registerSchema = yup.object().shape({
    name: yup.string()
      .required("Nome obrigatório*")
      .min(3, "Nome mínimo de 3 caracteres")
      .max(30, "Nome máximo de 30 caracteres"),

    email: yup.string().required("Email obrigatório*").email("Email inválido"),

    password: yup.string()
      .required("Senha obrigatória*")
      .matches(/(?=.*?[A-Z])/, "Precisa ter uma letra maiúscula")
      .matches(/(?=.*?[a-z])/, "Precisa ter uma letra minúscula")
      .matches(/(?=.*?[0-9])/, "Precisa conter um número")
      .matches(/(?=.*?[#?!@$%^&*-])/, "Precisa ter um caractere especial")
      .min(8, "Tamanho mínimo de 8 caracteres"),

    confirm_password: yup.string()
      .oneOf([yup.ref("password"), null], "As senhas precisam ser iguais"),

    bio: yup.string()
      .required("Descrição obrigatória*")
      .min(10, "Pelo menos 10 caracteres")
      .max(50, "Máximo de 50 caracteres"),

    contact: yup.string()
      .required("Opção de contato obrigatório*")
      .min(10, "Pelo menos 10 caracteres")
      .max(50, "Máximo de 50 caracteres"),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onChange",
    resolver: yupResolver(registerSchema)
  });

  function onSubmitFunction(data) {
    console.log(data);
    /* toast.success("Conta criada com sucesso", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      }); */
  }

  return (
    <StyledDiv>
      <div className="container">
        <StyledHeader>
          <h1 className="title1">Kenzie Hub</h1>
          <StyledLink to={"/login"}>Voltar</StyledLink>
        </StyledHeader>

        <main>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h2 className="title2">Crie sua conta</h2>
            <p>Rapido e grátis, vamos nessa!</p>
            <Input
              type="text"
              id="name"
              label="Nome"
              register={register("name")}
              placeholder="Digite seu nome"
              error={errors.name?.message && <span aria-label="error">{errors.name.message}</span>}
            />
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
            <Input
              type="password"
              id="confirm_password"
              label="Confirmar senha"
              register={register("confirm_password")}
              placeholder="Confirme sua senha"
              error={errors.confirm_password?.message && <span aria-label="error">{errors.confirm_password.message}</span>}
            />
            <Input
              type="text"
              id="bio"
              label="Bio"
              register={register("bio")}
              placeholder="Fale sobre você"
              error={errors.bio?.message && <span aria-label="error">{errors.bio.message}</span>}
            />
            <Input
              type="tel"
              id="contact"
              label="Contato"
              register={register("contact")}
              placeholder="Opção de contato"
              error={errors.contact?.message && <span aria-label="error">{errors.contact.message}</span>}
            />
            <Select
              id="course_module"
              label="Selecionar módulo"
              register={register("course_module")}
            >
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
