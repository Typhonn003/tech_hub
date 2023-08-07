import { Routes, Route, Navigate } from "react-router-dom";
import { DashboardPage, LoginPage, RegisterPage } from "../pages";
import { RegisterProvider } from "../contexts/registerContext";
import { ProtectedRoutes } from "../components";
import { TechProvider, UserProvider } from "../contexts";

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
