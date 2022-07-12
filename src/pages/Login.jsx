import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function Login() {
  // if (localStorage.getItem("token")) return <Navigate to={"/conta"} />;

  return (
    <div className="login mobile:flex mobile:justify-center tablet:grid tablet:grid-cols-2 w-full tablet:gap-4 laptop:gap-8 flex-1">
      <div className="hidden tablet:block bg-LoginDog bg-cover bg-center bg-no-repeat z-10"></div>
      <Outlet />
    </div>
  );
}
