import { Outlet, Navigate, Route } from 'react-router-dom';

function ProtectedRoute({ loggedIn }) {
  return loggedIn ? <Outlet /> : <Navigate to='/signin' />;
}
export default ProtectedRoute;
