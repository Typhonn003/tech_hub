import { createContext, ReactNode, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { useAuth, useUser } from "../hooks";
import { EditTechData, FullTechData, NewTechData } from "../interfaces/tech";

interface TechProviderProps {
  children: ReactNode;
}

interface TechContextValues {
  item: FullTechData | null;
  setItem: (value: FullTechData) => void;
  addNewTech: (value: NewTechData) => void;
  editTech: (value: EditTechData) => void;
  deleteTech: () => void;
}

export const TechContext = createContext<TechContextValues>(
  {} as TechContextValues
);

export const TechProvider = ({ children }: TechProviderProps) => {
  const { closeAddModal, closeEditModal } = useUser();
  const { userTechs, setUserTechs } = useAuth();
  const [item, setItem] = useState<FullTechData | null>(null);

  const addNewTech = async (data: NewTechData) => {
    try {
      const response = await api.post("users/techs", data);
      toast.success("Sua tecnologia foi registrada com sucesso");

      setUserTechs([...userTechs, response.data]);
      closeAddModal();
    } catch (error) {
      console.error(error);
      toast.error("O usuário ja registrou essa tecnologia anteriormente");
    }
  };

  const editTech = async (data: EditTechData) => {
    try {
      const response = await api.put(`users/techs/${item!.id}`, data);

      const filteredITechs = userTechs.map((tech) => {
        return tech.id === item!.id
          ? { ...tech, status: response.data.status }
          : tech;
      });

      setUserTechs(filteredITechs);
      closeEditModal();
      toast.success("Status alterado com sucesso");
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTech = async () => {
    try {
      await api.delete(`users/techs/${item!.id}`);

      const filteredTechs = userTechs.filter((tech) => tech.id !== item!.id);

      setUserTechs(filteredTechs);
      closeEditModal();
      toast.success("Tecnologia deletada com sucesso");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TechContext.Provider
      value={{
        item,
        setItem,
        addNewTech,
        editTech,
        deleteTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
