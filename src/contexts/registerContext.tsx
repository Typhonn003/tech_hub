import { ReactNode, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { RegisterData } from "../interfaces/register";

interface RegisterProviderProps {
  children: ReactNode;
}

interface RegisterContextValues {
  registerUser: (value: RegisterData) => void;
  loading: boolean;
}

export const RegisterContext = createContext<RegisterContextValues>(
  {} as RegisterContextValues
);

export const RegisterProvider = ({ children }: RegisterProviderProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const registerUser = async (userData: RegisterData) => {
    try {
      setLoading(true);
      await api.post("users", userData);
      toast.success("Conta criada com sucesso");

      setTimeout(() => navigate("/login"), 4500);
    } catch (error) {
      console.error(error);
      toast.error("Email já cadastrado");
    } finally {
      setLoading(false);
    }
  };

  return (
    <RegisterContext.Provider value={{ registerUser, loading }}>
      {children}
    </RegisterContext.Provider>
  );
};
