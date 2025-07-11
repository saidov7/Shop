import { Navigate } from "react-router-dom";
import { useGlobal } from "../context/GlobalContext";

export default function PrivateRoute({ children }) {
  const { user } = useGlobal();
  return user ? children : <Navigate to="/login" />;
}
