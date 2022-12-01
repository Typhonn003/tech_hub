import { Routes, Route, Navigate } from "react-router-dom";

export function AllRoutes() {

  return (
    <Routes>
      <Route path="/login" element={null} />
      <Route path="/" element={null} />
        <Route path="register" element={null} />
        <Route path="dashboard" element={null} />
      <Route />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}
