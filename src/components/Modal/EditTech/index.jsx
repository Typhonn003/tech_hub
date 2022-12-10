import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { StyledForm, StyledModalWrapper } from "../style";
import { CgClose } from "react-icons/cg";
import { Input } from "../../Input/Default";
import { Select } from "../../Input/Select";
import { PrimaryButton } from "../../Button/Default";
import { CommonButton } from "../../Button/Medium";
import { TechContext } from "../../../contexts/TechContext";

export function EditTechModal() {

  const { item, editRegister, editHandleSubmit, editTech, deleteTech } = useContext(TechContext);
  const { closeEditModal } = useContext(UserContext);

  return (
    <StyledModalWrapper>
      <StyledForm onSubmit={editHandleSubmit(editTech)}>
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
          defaultValue={item.title}
          disabled={true}
        />
        <Select id="status" label="Status" register={editRegister("status")} defaultValue={item.status}>
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
}
