import React from "react";

import newsData from "../../newsData";
import { convertToTranslit } from "../../pages/helpers/translitId";

import TimeTag from "../TimeTag";
import { ReactComponent as ExclamationMarkIcon } from "../../icons/exclamation-mark.svg";

const NewsSummary: React.FC = () => {
  const lastNews = newsData.slice(-10).reverse();

  const importanceTag = (
    <div className="text-md flex">
      <ExclamationMarkIcon className="text-purple-main mr-2" />
      <span className="text-purple-main font-bold">Важливо</span>
    </div>
  );

  const getFontWeight = (is_important: boolean) => {
    if (is_important) {
      return "font-bold";
    }
    return "font-light";
  };

  const getBorderStyle = (index: number) => {
    if (index < lastNews.length - 1) {
      return "border-b-2 border-black-secondary border-opacity-20";
    }
  };

  return (
    <div className="NewsSummary w-[432px] bg-black-background border-t-4 border-purple-main py-4">
      <h2 className="text-md px-4">Останні новини</h2>
      {lastNews.map((news, index) => {
        return (
          <div className={"p-4 space-y-2 " + getBorderStyle(index)}>
            {news.is_important ? importanceTag : ""}
            <a
              href={"/news/" + convertToTranslit(news.title)}
              title="Переглянути новину"
              className="block"
            >
              <h4
                className={
                  "hover:text-purple-main " + getFontWeight(news.is_important)
                }
              >
                {news.title}
              </h4>
            </a>
            <div className="text-black-secondary opacity-50">
              <TimeTag time={news.time} />
            </div>
          </div>
        );
      })}
      <div className="px-3 pt-3 text-center">
        <a
          href="/news"
          title="Переглянути всі новини"
          className="bg-purple-main text-white block py-3 font-bold text-md rounded-lg hover:bg-opacity-70"
        >
          Всі новини
        </a>
      </div>
    </div>
  );
};

export default NewsSummary;
