import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import UserNav from "./UserNav";
import Head from "../Head";

export default function UserHeader() {
  const [title, setTitle] = useState("");
  const { pathname } = useLocation();
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  useEffect(() => {
    setTitle(document.querySelector("a.active").title);
  }, [pathname]);

  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  function handleClick(event) {
    if (event.target != document.querySelector(".menu-toggle"))
      setIsOpenMenu(false);
  }

  return (
    <>
      
      <header className="flex items-center justify-between relative anime-fade-left">
        <h1 className="title text-3xl tablet:text-5xl my-8">{title}</h1>
        <UserNav
          setTitle={setTitle}
          isOpenMenu={isOpenMenu}
          setIsOpenMenu={setIsOpenMenu}
        />
      </header>
    </>
  );
}
