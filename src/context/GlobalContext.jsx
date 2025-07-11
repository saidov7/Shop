import { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext();
export const useGlobal = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [error, setError] = useState(null);
  const [toast, setToast] = useState("");

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2000);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
    showToast("Mahsulot savatga qo‘shildi");
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const login = (username, password) => {
    if (username === "admin" && password === "123456") {
      const newUser = { username };
      setUser(newUser);
      localStorage.setItem("user", JSON.stringify(newUser)); 
      setError(null);
    } else {
      setError("Login yoki parol noto‘g‘ri!");
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user"); 
  };

  return (
    <GlobalContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        user,
        login,
        logout,
        error,
        toast,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
