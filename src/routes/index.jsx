import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "../pages/login";

export function AllRoutes() {

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={null} />
      <Route path="/dashboard" element={null} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}
