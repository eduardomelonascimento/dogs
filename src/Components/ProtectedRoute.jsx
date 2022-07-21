import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import LoadingBone from "./Loading/LoadingBone";

export default function ProtectedRoute({ element }) {
  const { logged } = useContext(UserContext);

  if (logged === true) {
    return element
  } else if (logged === false) {
    return <Navigate to={"/login"} />;
  } else {
    return <LoadingBone/>;
  }
}
