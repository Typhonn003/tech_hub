import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "../pages/login";
import { RegisterPage } from "../pages/register";

export function AllRoutes() {

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={null} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}
