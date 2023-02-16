import { useState } from "react";
import { createContext, useContext } from "react";
import { api } from "../services/api";

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function singIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;
      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({ user, token });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Um erro inesperado aconteceu");
      }
    }
  }

  return (
    <AuthContext.Provider value={{ singIn, user: data.user }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuthContext() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, AuthContext, useAuthContext };
