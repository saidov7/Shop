
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useGlobal } from "./context/GlobalContext";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";

function App() {
  const { isAuthenticated } = useGlobal();
  const location = useLocation();
  const hideNavbar = ["/login", "/signup"].includes(location.pathname);

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? <Home /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/product/:id"
          element={
            isAuthenticated ? <ProductDetails /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/cart"
          element={
            isAuthenticated ? <Cart /> : <Navigate to="/login" replace />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
