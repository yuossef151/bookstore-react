import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // تحميل الداتا أول ما التطبيق يفتح
  useEffect(() => {
    const stored = localStorage.getItem("contactData");
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  const login = (data) => {
    localStorage.setItem("contactData", JSON.stringify(data));
    setUser(data);
  };

  const logout = () => {
    localStorage.removeItem("contactData");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
