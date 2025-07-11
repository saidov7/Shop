import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import PrivateRoute from "./routes/PrivateRoute";
import { useGlobal } from "./context/GlobalContext";

export default function App() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/login";
  const { toast } = useGlobal();

  return (
    <>
      {!hideNavbar && <Navbar />}

      {}
      {toast && <div className="toast">{toast}</div>}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
        <Route path="/product/:id" element={<PrivateRoute><ProductDetails /></PrivateRoute>} />
      </Routes>
    </>
  );
}
