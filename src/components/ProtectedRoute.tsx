import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute: React.FC = () => {
  const token = localStorage.getItem('token');

  // Check if the token exists, render Outlet or Navigate
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
