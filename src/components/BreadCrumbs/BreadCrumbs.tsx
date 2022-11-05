import React from "react";
import { HOME_PAGE_ROUTE } from "../../config/routes";

import { ReactComponent as ChevronRightIcon } from "../../icons/chevron-right.svg";

interface BreadCrumbsProps {
  currentPage: string;
}

const BreadCrumbs: React.FC<BreadCrumbsProps> = ({ currentPage }) => {
  return (
    <div className="BreadCrumbs flex space-x-1 text-sm font-light">
      <a
        href={HOME_PAGE_ROUTE}
        title="До головної"
        className="hover:text-purple-main"
      >
        Головна
      </a>
      <ChevronRightIcon />
      <div>{currentPage}</div>
    </div>
  );
};

export default BreadCrumbs;
