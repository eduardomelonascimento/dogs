import classNames from "classnames";
import { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import useMedia from "../../hooks/useMedia";
import AddIcon from "../Svgs/AddIcon";
import AnalyticsIcon from "../Svgs/AnalyticsIcon";
import FeedIcon from "../Svgs/FeedIcon";
import LogoutIcon from "../Svgs/LogoutIcon";
import "./styles.css";

export default function UserNav({ isOpenMenu, setIsOpenMenu }) {
  const { logout } = useContext(UserContext);
  const { pathname } = useLocation();
  const mobile = useMedia("(max-width: 700px)");

  return (
    <>
      {mobile && (
        <button
          className={classNames("menu-toggle", {
            "menu-toggle-active": isOpenMenu,
          })}
          aria-label="Menu"
          onClick={() => setIsOpenMenu(!isOpenMenu)}
        ></button>
      )}
      <nav
        className={classNames({
          "flex gap-3 items-center justify-between nav animate-fade-left":
            !mobile,
          "menu-mobile menu-mobile-active": mobile && isOpenMenu,
          "menu-mobile": mobile && !isOpenMenu,
        })}
        onClick={() => setIsOpenMenu(false)}
      >
        <NavLink
          className={classNames({ active: pathname === "/account" })}
          to=""
          title="Minhas fotos"
          end
        >
          <FeedIcon />
          {mobile && <span>Minhas fotos</span>}
        </NavLink>
        <NavLink
          className={classNames({ active: pathname === "/account/analytics" })}
          to="analytics"
          title="Estatísticas"
        >
          <AnalyticsIcon />
          {mobile && <span>Estatísticas</span>}
        </NavLink>
        <NavLink
          className={classNames({ active: pathname === "/account/post" })}
          to="post"
          title="Publicar foto"
        >
          <AddIcon />
          {mobile && <span>Publicar foto</span>}
        </NavLink>
        <button onClick={logout} title="Sair">
          <LogoutIcon />
          {mobile && <span>Sair</span>}
        </button>
      </nav>
    </>
  );
}
