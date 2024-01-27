import React from 'react';
import { Outlet, Navigate, Route } from 'react-router-dom';

function ProtectedRoute({ loggedIn, ...props }) {
  return loggedIn ? <Outlet /> : <Navigate to='/signin' />;
}
export default ProtectedRoute;
