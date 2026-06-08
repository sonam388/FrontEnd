import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const adminInfo = localStorage.getItem("adminInfo");

  return adminInfo ? (
    children
  ) : (
    <Navigate to="/admin" replace />
  );
};

export default ProtectedRoute;