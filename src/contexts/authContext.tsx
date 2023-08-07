import { createContext, ReactNode, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { LoginData } from "../interfaces/login";
import { UserData } from "../interfaces/user";
import { FullTechData } from "../interfaces/tech";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextValues {
  login: (value: LoginData) => void;
  loading: boolean;
  loadUserLoading: boolean;
  user: UserData | null;
  userTechs: FullTechData[];
  setUserTechs: (value: FullTechData[]) => void
}

export const AuthContext = createContext<AuthContextValues>(
  {} as AuthContextValues
);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [loadUserLoading, setLoadUserLoading] = useState<boolean>(true);
  const [user, setUser] = useState<UserData | null>(null);
  const [userTechs, setUserTechs] = useState<FullTechData[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("user_token");

      if (!token) {
        setLoadUserLoading(false);
        return;
      }

      try {
        api.defaults.headers.common.authorization = `Bearer ${token}`;

        const response = await api.get("profile");

        setUser(response.data);
        setUserTechs(response.data.techs);
      } catch (error) {
        console.error(error);
      } finally {
        setLoadUserLoading(false);
      }
    };

    loadUser();
  }, []);

  const login = async (userData: LoginData) => {
    try {
      setLoading(true);
      const response = await api.post("sessions", userData);
      setUserTechs(response.data.user.techs);
      setUser(response.data.user);
      localStorage.setItem("user_token", response.data.token);

      api.defaults.headers.common.authorization = `Bearer ${response.data.token}`;

      setUserTechs(response.data.user.techs);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Usuário ou senha incorreto");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        loading,
        loadUserLoading,
        user,
        userTechs,
        setUserTechs
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
