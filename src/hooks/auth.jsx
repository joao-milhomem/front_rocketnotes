import { useState, useEffect } from "react";
import { createContext, useContext } from "react";
import { api } from "../services/api";

const AuthContext = createContext({});

function useAuthContext() {
  const context = useContext(AuthContext);
  return context;
}

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function singIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setData({ user, token });
      localStorage.setItem("@rocketnotes:user", JSON.stringify(user));
      localStorage.setItem("@rocketnotes:token", token);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Um erro inesperado aconteceu");
      }
    }
  }

  async function singOut() {
    localStorage.removeItem("@rocketnotes:user");
    localStorage.removeItem("@rocketnotes:token");
    setData({});
  }

  async function updateProfile(user, avatarFile) {
    try {
      if (avatarFile) {
        const formData = new FormData();
        formData.append("avatar", avatarFile);
        const response = await api.patch("/users/avatar", formData);
        console.log(response);
        user.avatar = response.data.avatar;
      }

      await api.put("/users", user);
      localStorage.setItem("@rocketnotes:user", JSON.stringify(user));

      setData({
        user,
        token: data.token,
      });
      alert("Usuário atualizado com sucesso");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Ops, algo deu errado");
        console.log(error);
      }
    }
  }

  useEffect(() => {
    const user = localStorage.getItem("@rocketnotes:user");
    const token = localStorage.getItem("@rocketnotes:token");

    if (user && token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setData({
        token,
        user: JSON.parse(user),
      });
    }
  }, []);
  return (
    <AuthContext.Provider
      value={{ singIn, singOut, updateProfile, user: data.user, data }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext, useAuthContext };
