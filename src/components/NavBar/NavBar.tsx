import React, { useState } from "react";
import {
  ABOUT_PAGE_ROUTE,
  CONTACT_PAGE_ROUTE,
  HOME_PAGE_ROUTE,
  NEWS_PAGE_ROUTE,
  POSTS_PAGE_ROUTE,
} from "../../config/routes";
import SupportButton from "../SupportButton";
import { ReactComponent as MenuIcon } from "../../icons/menu.svg";
import { ReactComponent as CloseIcon } from "../../icons/close.svg";

const NavBar: React.FC = () => {
  const [hidden, setHidden] = useState(true);

  const toggleMenu = () => {
    const newState = !hidden;
    setHidden(newState);
  };

  const getMenuStyles = () => {
    if (hidden) {
      return "hidden";
    }
    return "max-sm:fixed bg-white z-20 max-sm:h-[170px] max-sm:w-[200px] top-[88px] left-0 max-sm:space-y-2 max-sm:pl-4 max-sm:text-lg rounded-br-[50%] ease-in-out";
  };

  const getNavStyles = () => {
    if (!hidden) {
      return "w-screen h-[88px]";
    }
  };

  return (
    <div>
      <div className={hidden ? "" : "fixed z-10 top-0"}>
        <div
          className={
            "flex justify-between items-center font-medium text-md max-md:px-4 bg-white " +
            getNavStyles()
          }
        >
          <button type="button" className="sm:hidden" onClick={toggleMenu}>
            <MenuIcon className={hidden ? "" : "hidden"} />
            <CloseIcon className={hidden ? "hidden" : ""} />
          </button>

          <a href="/" title="Головна сторінка">
            <img
              src={require("../../assets/logo.png")}
              alt="Газетяр"
              className="h-[30px]"
            />
          </a>

          <div className={"sm:flex sm:space-x-7 " + getMenuStyles()}>
            <a
              href={HOME_PAGE_ROUTE}
              title="Головна"
              className="hover:text-purple-main"
            >
              Головна
            </a>
            <a
              href={NEWS_PAGE_ROUTE}
              title="Новини"
              className="hover:text-purple-main"
            >
              Новини
            </a>
            <a
              href={POSTS_PAGE_ROUTE}
              title="Тексти"
              className="hover:text-purple-main"
            >
              Тексти
            </a>
            <a
              href={ABOUT_PAGE_ROUTE}
              title="Про мене"
              className="hover:text-purple-main"
            >
              Про мене
            </a>
            <a
              href={CONTACT_PAGE_ROUTE}
              title="Контакти"
              className="hover:text-purple-main"
            >
              Контакти
            </a>
          </div>

          <SupportButton />
        </div>
        <div
          className={
            hidden
              ? ""
              : "bg-purple-main opacity-50 fixed top-[88px] z-10 max-sm:h-screen max-sm:w-screen "
          }
        ></div>
      </div>
      <div className={hidden ? "" : "h-[48px]"}></div>
    </div>
  );
};

export default NavBar;
