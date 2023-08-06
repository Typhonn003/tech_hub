import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export const ProtectedRoutes = () => {
  const { loadUserLoading, user } = useContext(AuthContext);

  if (loadUserLoading) {
    return null;
  }

  return user ? <Outlet /> : <Navigate to="/login" />;
};
