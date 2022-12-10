import { createContext, useContext, useState } from "react";
import { UserContext } from "./UserContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { newTechSchema } from "../validations/NewTechSchema";
import { AuthContext } from "./AuthContext";

export const TechContext = createContext({});

export function TechProvider({ children }) {

  const [item, setItem] = useState(null);

  const { closeAddModal, closeEditModal } = useContext(UserContext);
  const { userTechs, setUserTechs } = useContext(AuthContext);

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    mode: "onChange",
    resolver: yupResolver(newTechSchema),
  });
  const { register: editRegister, handleSubmit: editHandleSubmit } = useForm();

  async function addNewTech(data) {

    try {

      const response = await api.post("users/techs", data);
      toast.success("Sua tecnologia foi registrada com sucesso");

      setUserTechs([...userTechs, response.data]);
      reset();
      closeAddModal();
    } catch (error) {

      console.error(error);
      toast.error("O usuário ja registrou essa tecnologia anteriormente");
    }
  }

  async function editTech(data) {

    try {

      const response = await api.put(`users/techs/${item.id}`, data);

      const filteredITechs = userTechs.map((tech) => {
        return tech.id === item.id
          ? { ...tech, status: response.data.status }
          : tech;
      });

      setUserTechs(filteredITechs);
      closeEditModal();
      toast.success("Status alterado com sucesso");
    } catch (error) {

      console.error(error);
    }
  }

  async function deleteTech() {

    try {

      await api.delete(`users/techs/${item.id}`);

      const filteredTechs = userTechs.filter((tech) => tech.id !== item.id);

      setUserTechs(filteredTechs);
      closeEditModal();
      toast.success("Tecnologia deletada com sucesso");
    } catch (error) {
      
      console.error(error);
    }
  }

  return (
    <TechContext.Provider
      value={{
        handleSubmit,
        addNewTech,
        register,
        errors,
        reset,
        item,
        setItem,
        editRegister,
        editHandleSubmit,
        editTech,
        deleteTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
}
