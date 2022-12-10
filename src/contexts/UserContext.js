import { useNavigate } from "react-router-dom";
import { createContext, useState } from "react";

export const UserContext = createContext({});

export function UserProvider({ children }) {
  
  const [addTechModal, setAddTechModal] = useState(false);
  const [editTechModal, setEditTechModal] = useState(false);
  const navigate = useNavigate();

  const openAddModal = () => setAddTechModal(true);
  const closeAddModal = () => setAddTechModal(false);
  const openEditModal = () => setEditTechModal(true);
  const closeEditModal = () => setEditTechModal(false);

  function logout() {

    localStorage.clear();
    navigate("/login");
  }

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
}
