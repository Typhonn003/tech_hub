import { useContext } from "react";
import { PrimaryButton } from "../../Button/Default";
import { CommonButton } from "../../Button/Medium";
import { Input } from "../../Input/Default";
import { Select } from "../../Input/Select";
import { StyledForm, StyledModalWrapper } from "../style";
import { TechContext } from "../../../contexts/TechContext";
import { UserContext } from "../../../contexts/UserContext";
import { CgClose } from "react-icons/cg";

export function AddTechModal() {

  const { closeAddModal } = useContext(UserContext)
  const { handleSubmit, addNewTech, register, errors, reset } = useContext(TechContext)

  return (
    <StyledModalWrapper>
      <StyledForm onSubmit={handleSubmit(addNewTech)}>
        <div>
            <h2 className="title2">Cadastrar Tecnologia</h2>
            <CommonButton type="button" onClick={() => {
              closeAddModal()
              reset()
            }}><CgClose /></CommonButton>
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
