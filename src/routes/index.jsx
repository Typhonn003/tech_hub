import { Routes, Route, Navigate } from "react-router-dom";
import { RegisterProvider } from "../contexts/RegisterContext";
import { DashboardPage } from "../pages/dashboard";
import { LoginPage } from "../pages/login";
import { RegisterPage } from "../pages/register";

export function AllRoutes() {
  
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
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}
