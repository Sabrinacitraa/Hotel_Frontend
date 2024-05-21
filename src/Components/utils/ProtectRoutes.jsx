import React from "react";
import { useLocation, Navigate } from "react-router-dom";

const ProtectRoutes = ({ children }) => {
  const token = sessionStorage.getItem("Token");
  const location = useLocation();

  if (!token) {
    return <Navigate to="/Login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectRoutes;
