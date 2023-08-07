import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks";

export const ProtectedRoutes = () => {
  const { user, loadUserLoading } = useAuth();

  if (loadUserLoading) {
    return null;
  }

  return user ? <Outlet /> : <Navigate to="/login" />;
};
