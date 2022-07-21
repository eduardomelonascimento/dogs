import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import UserHeader from "../Components/User/UserHeader";
import { UserContext } from "../contexts/UserContext";
import Head from "../Components/Head";

export default function User() {
  const { logged } = useContext(UserContext);
  const { pathname } = useLocation();

  if (!logged) return <Navigate to={"/login"} />;

  return (
    <>
      <section className="w-full max-w-screen-large-tablet px-4">
        {pathname === "/account" ? (
          <Head
            title={"Minha conta"}
            description="Veja as suas publicações"
            dependencies={[pathname]}
          />
        ) : null}
        <UserHeader />
        <Outlet />
      </section>
    </>
  );
}
