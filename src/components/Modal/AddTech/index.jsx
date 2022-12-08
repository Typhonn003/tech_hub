import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../contexts/UserContext";
import { PrimaryButton } from "../../Button/Default";
import { CommonButton } from "../../Button/Medium";
import { Input } from "../../Input/Default";
import { Select } from "../../Input/Select";
import { StyledForm, StyledModalWrapper } from "../style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../../services/api";
import { toast } from "react-toastify";

export function AddTechModal() {

  const { closeModal } = useContext(UserContext)

  const newTechSchema = yup.object().shape({
    title: yup
      .string()
      .required("Nome obrigatório*")
      .max(16, "Nome máximo de 16 caracteres"),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onChange",
    resolver: yupResolver(newTechSchema)
  });

  async function addNewTech(data) {

    try {

      const response = await api.post("users/techs", data);
      toast.success("Tecnologia registrada com sucesso");

      closeModal();
    } catch (error) {

      console.error(error);
      toast.error("O usuário ja registrou essa tecnologia anteriormente");
    }
  }

  return (
    <StyledModalWrapper>
      <StyledForm onSubmit={handleSubmit(addNewTech)}>
        <div>
            <h2 className="title2">Cadastrar Tecnologia</h2>
            <CommonButton onClick={closeModal}>X</CommonButton>
        </div>
        <Input
          type="text"
          id="name"
          label="Nome"
          placeholder="Digite o nome da tecnologia"
          register={register("title")}
          error={errors.title?.message && <span aria-label="error">{errors.title.message}</span>}
        />
        <Select
          id="status"
          label="Selecionar status"
          register={register("status")}
        >
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </Select>
        <PrimaryButton type="submit">Cadastrar Tecnologia</PrimaryButton>
      </StyledForm>
    </StyledModalWrapper>
  );
}
