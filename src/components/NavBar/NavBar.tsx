import React from "react";
import {
  ABOUT_PAGE_ROUTE,
  CONTACT_PAGE_ROUTE,
  HOME_PAGE_ROUTE,
  NEWS_PAGE_ROUTE,
  POSTS_PAGE_ROUTE,
} from "../../config/routes";
import SupportButton from "../SupportButton";

const NavBar: React.FC = () => {
  return (
    <div className="NavBar h-[80px] flex justify-between items-center font-medium text-md">
      <a href="/" title="Головна сторінка">
        <img
          src={require("../../assets/logo.png")}
          alt="Газетяр"
          className="h-[30px]"
        />
      </a>

      <div className="flex space-x-7">
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
  );
};

export default NavBar;
