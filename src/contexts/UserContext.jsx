import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { CreateUser, GetToken, GetUser, ValidateToken } from "../services/api";

export const UserContext = createContext();

export function UserStorage({ children }) {
  const [data, setData] = useState();
  const [logged, setLogged] = useState();
  const navigate = useNavigate();

  const req = useFetch();

  async function singin(username, password, email) {
    const { url, options } = CreateUser(username, password, email);
    const { response } = await req.request(url, options);
    if (response.ok) login(username, password);
  }

  async function logout() {
    setData(null);
    setLogged(false);
    localStorage.removeItem("token");
    setLogged(false);
    navigate("/login");
  }

  async function getToken(username, password) {
    const { url, options } = GetToken(username, password);
    const { response, json } = await req.request(url, options);
    if (response.ok) {
      localStorage.setItem("token", json.token);
    }
    return response.ok;
  }

  async function getUser(token) {
    const { url, options } = GetUser(token);
    const response = await req.request(url, options);
    setData(response.json);
    navigate("/conta");
  }

  async function login(username, password) {
    if (await getToken(username, password)) {
      const token = localStorage.getItem("token");
      getUser(token);
      setLogged(true);
    }
  }

  async function autologin() {
    if (localStorage.getItem("token")) {
      const { url, options } = ValidateToken(localStorage.getItem("token"));
      const { response } = await req.request(url, options);
      if (response.ok) {
        getUser(localStorage.getItem("token"));
      }
    }
  }

  useEffect(() => {
    autologin();
  }, []);

  return (
    <UserContext.Provider
      value={{
        logout,
        data,
        login,
        singin,
        setData,
        logged,
        loading: req.loading,
        error: req.error,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
