import { StyledForm, StyledModalWrapper } from "../style";
import { CgClose } from "react-icons/cg";
import { CommonButton, Input, PrimaryButton, Select } from "../..";
import { useTech, useUser } from "../../../hooks";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { newTechSchema } from "../../../schemas";

export const EditTechModal = () => {
  const { closeEditModal } = useUser();
  const { item, editTech, deleteTech } = useTech();

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(newTechSchema),
  });

  return (
    <StyledModalWrapper>
      <StyledForm onSubmit={handleSubmit(editTech)}>
        <div>
          <h2 className="title2">Detalhes da tecnologia</h2>
          <CommonButton type="button" onClick={closeEditModal}>
            <CgClose />
          </CommonButton>
        </div>
        <Input
          type="text"
          id="name"
          label="Nome do projeto"
          register={register("title")}
          defaultValue={item!.title}
        />
        <Select
          id="status"
          label="Status"
          register={register("status")}
          defaultValue={item!.status}
        >
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </Select>
        <div className="buttons">
          <PrimaryButton type="submit">Salvar alterações</PrimaryButton>
          <PrimaryButton onClick={deleteTech} type="button">
            Excluir
          </PrimaryButton>
        </div>
      </StyledForm>
    </StyledModalWrapper>
  );
};
