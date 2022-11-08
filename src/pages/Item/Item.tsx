import React from "react";
import { useParams } from "react-router-dom";
import { ABOUT_PAGE_ROUTE } from "../../config/routes";

import { findItemByTitle } from "../helpers/translitId";

import PageTitle from "../../components/PageTitle";
import TimeTag from "../../components/TimeTag";
import NotFound from "../NotFound";
import NewsSummary from "../../components/NewsSummary";
import AuthorTag from "../../components/AuthorTag";

export enum ItemType {
  NEWS = "news",
  POST = "post",
}

interface ItemProps {
  type: ItemType;
}

const Item: React.FC<ItemProps> = ({ type }) => {
  const { id } = useParams();
  const item = findItemByTitle(id || "", type);

  const getContent = (content: any) => {
    return (
      <div className="text-lg font-light space-y-5">
        {content.map((element: any) => {
          if (element.type === "paragraph") {
            return <p>{element.details}</p>;
          }
          if (element.type === "quote") {
            return <p className="italic">{element.details}</p>;
          }
          if (element.type === "subtitle") {
            return <p className="font-bold text-center">{element.details}</p>;
          }
          if (element.type === "picture") {
            return (
              <div>
                <img
                  src={element.img}
                  alt={element.imgTitle}
                  className="h-[350px] object-cover mx-auto"
                />
                <div className="text-center text-sm font-semibold text-black-secondary opacity-50 pt-2">
                  {element.imgTitle}
                  <br />
                  {element.imgSource}
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  };

  if (item) {
    return (
      <div className="NewsItem pt-5 max-md:px-4">
        <div className="grid md:grid-cols-11 sm:grid-cols-1">
          <div className="md:col-span-7">
            <PageTitle title={item.title} />
            <div className="flex justify-between border-b-2 py-5 mb-5">
              <a
                href={ABOUT_PAGE_ROUTE}
                className="text-sm text-purple-main underline"
                title="Переглянути інформацію про автора"
              >
                <AuthorTag author={item.author} />
              </a>
              <TimeTag
                className="text-black-secondary opacity-50"
                time={item.time}
              />
            </div>
            {getContent(item.content)}
          </div>
          <div className="md:col-span-4 sm:max-md:mx-auto md:ml-auto pt-8 md:pt-0 xs:max-sm:w-[500px] max-xs:px-3 max-sm:mx-auto">
            <NewsSummary />
          </div>
        </div>
      </div>
    );
  } else {
    return <NotFound />;
  }
};

export default Item;
