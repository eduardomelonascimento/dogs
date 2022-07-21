import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import DogsLogo from "./Svgs/DogsLogo";
import UserIcon from "./Svgs/UserIcon";

export default function Header() {
  const userContext = useContext(UserContext);
  return (
    <>
      <header className="border-b border-gray-200 w-full flex justify-center items-center h-14 fixed top-0 z-20 bg-white">
        <nav className="flex justify-between items-center max-w-screen-large-tablet w-full px-4">
          <Link to={"/"} className="p-2">
            <DogsLogo />
          </Link>
          <div>
            {userContext && userContext.data ? (
              <div className="flex gap-2">
                <Link to={"/account"} className="flex gap-2 items-baseline p-2">
                  {userContext.data.username}
                  <UserIcon />
                </Link>
              </div>
            ) : (
              <Link to={"/login"} className="flex gap-2 items-baseline p-2">
                Login / Criar <UserIcon />
              </Link>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}
