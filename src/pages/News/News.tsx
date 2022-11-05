import React, { useState } from "react";

import PageTitle from "../../components/PageTitle";
import TimeTag from "../../components/TimeTag";
import newsData from "../../newsData";

const News: React.FC = () => {
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
    <div className="News max-w-[850px] mx-auto my-10">
      <PageTitle title="Новини" />
      <div className="pt-5">
        {visibleNews.map((news, index) => {
          return (
            <div className={"py-5 " + getBorderStyle(index)}>
              <TimeTag
                time={news.time}
                className="text-black-secondary opacity-50 pb-2"
              />
              <h4 className={"text-lg " + getFontWeight(news.is_important)}>
                {news.title}
              </h4>
            </div>
          );
        })}
      </div>
      <div className="text-center pt-10">
        <button
          type="button"
          className="font-bold text-lg bg-purple-main text-white py-3 px-12 
            rounded-lg hover:opacity-70 disabled:opacity-50"
          onClick={handleButtonClick}
          disabled={visibleNewsAmount > newsData.length}
        >
          Більше новин
        </button>
      </div>
    </div>
  );
};

export default News;
