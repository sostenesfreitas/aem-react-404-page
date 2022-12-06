import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/Auth";

const ProtectedRoute = ({ children }: any) => {
  const { getToken } = useAuth();

  if (getToken() !== "admin") {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
