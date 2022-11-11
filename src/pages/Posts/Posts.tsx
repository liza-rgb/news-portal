import React, { useState, useEffect } from "react";

import postsData from "../../postsData";

import PageTitle from "../../components/PageTitle";
import Card from "../../components/Card";
import Button from "../../components/Button";

const Posts: React.FC = () => {
  useEffect(() => {
    document.title = "Газетяр: Тексти";
  }, []);

  const [visiblePostsAmount, setVisiblePostsAmount] = useState(9);
  const visiblePosts = postsData.slice(-visiblePostsAmount).reverse();

  const handleButtonClick = () => {
    const newVisiblePostsAmount = visiblePostsAmount + 9;
    setVisiblePostsAmount(newVisiblePostsAmount);
  };

  return (
    <div className="Posts pt-5 sm:max-md:w-[700px] xs:max-sm:w-[550px] max-md:mx-auto">
      <div className="max-xs:px-4">
        <PageTitle title="Тексти" />
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 xl:gap-14 lg:gap-8 md:gap-4 sm:gap-8 max-sm:gap-y-10 pt-10">
        {visiblePosts.map((post) => {
          return <Card post={post} />;
        })}
      </div>
      <div className="text-center pt-5">
        <Button
          label="Більше текстів"
          onClick={handleButtonClick}
          disabled={visiblePostsAmount > postsData.length}
        />
      </div>
    </div>
  );
};

export default Posts;
