import { useNavigate } from "react-router-dom";
import { createContext, ReactNode, useState } from "react";

interface UserProviderProps {
  children: ReactNode;
}

interface UserContextValues {
  addTechModal: boolean;
  openAddModal: () => void;
  closeAddModal: () => void;
  editTechModal: boolean;
  openEditModal: () => void;
  closeEditModal: () => void;
  logout: () => void;
}

export const UserContext = createContext<UserContextValues>(
  {} as UserContextValues
);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [addTechModal, setAddTechModal] = useState(false);
  const [editTechModal, setEditTechModal] = useState(false);
  const navigate = useNavigate();

  const openAddModal = () => setAddTechModal(true);
  const closeAddModal = () => setAddTechModal(false);
  const openEditModal = () => setEditTechModal(true);
  const closeEditModal = () => setEditTechModal(false);

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <UserContext.Provider
      value={{
        addTechModal,
        openAddModal,
        closeAddModal,
        editTechModal,
        openEditModal,
        closeEditModal,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
