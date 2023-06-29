import { Route, Navigate, Outlet } from 'react-router-dom';


export function ProtectedRoute(props) {
  if (localStorage.getItem('user')) {
    return <Outlet />;
  }
  else {
    return <Navigate to="/login" />;
  }
}
