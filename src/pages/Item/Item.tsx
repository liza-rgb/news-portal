import React from "react";
import { useParams } from "react-router-dom";

import { convertToTranslit, findItemByTitle } from "../helpers/translitId";

import PageTitle from "../../components/PageTitle";
import TimeTag from "../../components/TimeTag";

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

  if (item) {
    return (
      <div className="NewsItem pt-5">
        <PageTitle title={item.title} />
        <div className="flex justify-between border-b-2 py-5 mb-5">
          <a href="/about" className="text-sm text-purple-main underline">
            {item.author}
          </a>
          <TimeTag
            className="text-black-secondary opacity-50"
            time={item.time}
          />
        </div>
        <p className="text-lg font-light">{item.description}</p>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Item;
