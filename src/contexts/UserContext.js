import { useNavigate } from "react-router-dom";
import { createContext, useState } from "react";

export const UserContext = createContext({});

export function UserProvider({ children }) {

  const [techModal, setTechModal] = useState(false)
  const navigate = useNavigate();

  const openModal = () => setTechModal(true)
  const closeModal = () => setTechModal(false)

  function logout() {
    
    localStorage.clear();
    navigate("/login");
  }

  return (
    <UserContext.Provider value={{ techModal, openModal, closeModal, logout }}>{children}</UserContext.Provider>
  );
}
