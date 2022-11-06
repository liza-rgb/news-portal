import React from "react";
import { useLocation } from "react-router-dom";
import {
  ABOUT_PAGE_ROUTE,
  CONTACT_PAGE_ROUTE,
  HOME_PAGE_ROUTE,
  NEWS_PAGE_ROUTE,
  POSTS_PAGE_ROUTE,
} from "../../config/routes";

import { ReactComponent as ChevronRightIcon } from "../../icons/chevron-right.svg";

interface BreadCrumbsProps {
  currentPage: string;
}

const BreadCrumbs: React.FC<BreadCrumbsProps> = ({ currentPage }) => {
  const location = useLocation();
  const routes = location.pathname.split("/");

  const getName = (route: string) => {
    switch (route) {
      case HOME_PAGE_ROUTE.replace("/", ""):
        return "Головна";
      case NEWS_PAGE_ROUTE.replace("/", ""):
        return "Новини";
      case POSTS_PAGE_ROUTE.replace("/", ""):
        return "Тексти";
      case ABOUT_PAGE_ROUTE.replace("/", ""):
        return "Про мене";
      case CONTACT_PAGE_ROUTE.replace("/", ""):
        return "Контакти";
      default:
        return "";
    }
  };

  return (
    <div className="BreadCrumbs text-sm font-light flex space-x-1">
      {routes.map((route, index) => {
        if (index < routes.length - 1) {
          return (
            <div className="flex space-x-1">
              <a href={"/" + route} className="hover:text-purple-main">
                {getName(route)}
              </a>
              <ChevronRightIcon />
            </div>
          );
        }
        return <div>{getName(route)}</div>;
      })}
    </div>
  );
};

export default BreadCrumbs;
