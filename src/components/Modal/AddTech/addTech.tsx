import { StyledForm, StyledModalWrapper } from "../style";
import { CgClose } from "react-icons/cg";
import { CommonButton, Input, PrimaryButton, Select } from "../..";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { newTechSchema } from "../../../schemas";
import { useTech, useUser } from "../../../hooks";

export const AddTechModal = () => {
  const { addNewTech } = useTech();
  const { closeAddModal } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(newTechSchema),
    mode: "onChange",
  });

  return (
    <StyledModalWrapper>
      <StyledForm onSubmit={handleSubmit(addNewTech)}>
        <div>
          <h2 className="title2">Cadastrar Tecnologia</h2>
          <CommonButton type="button" onClick={closeAddModal}>
            <CgClose />
          </CommonButton>
        </div>
        <Input
          type="text"
          id="name"
          label="Nome"
          placeholder="Digite o nome da tecnologia"
          register={register("title")}
          error={
            errors.title?.message && (
              <span aria-label="error">{errors.title.message}</span>
            )
          }
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
};
