import React, { useState, useEffect } from "react";
import { NEWS_PAGE_ROUTE } from "../../config/routes";

import newsData from "../../newsData";
import { convertToTranslit } from "../helpers/translitId";

import Button from "../../components/Button";
import PageTitle from "../../components/PageTitle";
import TimeTag from "../../components/TimeTag";

const News: React.FC = () => {
  useEffect(() => {
    document.title = "Газетяр: Новини";
  }, []);

  const [visibleNewsAmount, setVisibleNewsAmount] = useState(10);
  const visibleNews = newsData.slice(-visibleNewsAmount).reverse();

  const handleButtonClick = () => {
    const newVisibleNewsAmount = visibleNewsAmount + 10;
    setVisibleNewsAmount(newVisibleNewsAmount);
  };

  const getFontWeight = (is_important: boolean) => {
    if (is_important) {
      return "font-bold";
    }
    return "font-normal";
  };

  const getBorderStyle = (index: number) => {
    if (index < visibleNewsAmount - 1 && index < newsData.length - 1) {
      return "border-b-2 border-black-secondary border-opacity-20";
    }
  };

  return (
    <div className="News max-xs:px-4 xs:max-w-[600px] sm:max-w-[700px] md:max-w-[850px] mx-auto pt-5">
      <PageTitle title="Новини" />
      <div className="pt-5">
        {visibleNews.map((news, index) => {
          return (
            <div className={"py-5 " + getBorderStyle(index)} key={index}>
              <TimeTag
                time={news.time}
                className="text-black-secondary opacity-50 pb-2"
              />
              <a
                href={NEWS_PAGE_ROUTE + "/" + convertToTranslit(news.title)}
                title="Переглянути новину"
              >
                <h4
                  className={
                    "text-lg hover:text-purple-main max-xs:text-lg " +
                    getFontWeight(news.is_important)
                  }
                >
                  {news.title}
                </h4>
              </a>
            </div>
          );
        })}
      </div>
      <div className="text-center">
        <Button
          label="Більше новин"
          onClick={handleButtonClick}
          disabled={visibleNewsAmount > newsData.length}
        />
      </div>
    </div>
  );
};

export default News;
