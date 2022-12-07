import { useNavigate } from "react-router-dom";
import { createContext } from "react";

export const UserContext = createContext({});

export function UserProvider({ children }) {
    
  const navigate = useNavigate();

  function logout() {
    localStorage.clear();
    navigate("/login");
  }

  return (
    <UserContext.Provider value={{ logout }}>{children}</UserContext.Provider>
  );
}
