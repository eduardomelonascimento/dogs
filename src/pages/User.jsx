import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export default function User() {
  const userContext = useContext(UserContext);
  if (!userContext.logged) return <Navigate to={"/login"} />;

  return <div>user</div>;
}