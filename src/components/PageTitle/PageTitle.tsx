import React from "react";

import BreadCrumbs from "../BreadCrumbs";

interface PageTitleProps {
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <div className="PageTitle">
      <BreadCrumbs currentPage={title} />
      <h1 className="text-xl pl-4 border-l-8 border-purple-main mt-4">
        {title}
      </h1>
    </div>
  );
};

export default PageTitle;
