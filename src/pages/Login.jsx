import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import LoadingBone from "../Components/Loading/LoadingBone";
import { UserContext } from "../contexts/UserContext";

export default function Login() {
  const { logged } = useContext(UserContext);
  const navigate = useNavigate();

  if (logged === true) navigate("/");

  return (
    <>
      {logged === undefined ? <LoadingBone /> : null}
      <div className="login mobile:flex mobile:justify-center tablet:grid tablet:grid-cols-2 w-full tablet:gap-4 laptop:gap-8 flex-1">
        <div className="hidden tablet:block bg-LoginDog bg-cover bg-center bg-no-repeat z-10"></div>
        <Outlet />
      </div>
    </>
  );
}
