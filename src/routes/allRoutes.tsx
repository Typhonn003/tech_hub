import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "../pages";
import { RegisterProvider } from "../contexts/registerContext";
import { RegisterPage } from "../pages/register/register";
import { ProtectedRoutes } from "../components";
import { TechProvider, UserProvider } from "../contexts";
import { DashboardPage } from "../pages/dashboard/dashboard";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/register"
        element={
          <RegisterProvider>
            <RegisterPage />
          </RegisterProvider>
        }
      />
      <Route element={<ProtectedRoutes />}>
        <Route
          path="/dashboard"
          element={
            <UserProvider>
              <TechProvider>
                <DashboardPage />
              </TechProvider>
            </UserProvider>
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};
