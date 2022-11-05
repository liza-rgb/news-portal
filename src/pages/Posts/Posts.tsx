import React, { useState } from "react";

import postsData from "../../postsData";

import PageTitle from "../../components/PageTitle";
import Card from "../../components/Card";
import Button from "../../components/Button";

const Posts: React.FC = () => {
  const [visiblePostsAmount, setVisiblePostsAmount] = useState(9);
  const visiblePosts = postsData.slice(-visiblePostsAmount).reverse();

  const handleButtonClick = () => {
    const newVisiblePostsAmount = visiblePostsAmount + 9;
    setVisiblePostsAmount(newVisiblePostsAmount);
  };

  return (
    <div className="Posts pt-5">
      <PageTitle title="Тексти" />
      <div className="grid grid-cols-3 gap-14 pt-10">
        {visiblePosts.map((post) => {
          return <Card post={post} />;
        })}
      </div>
      <div className="text-center pt-20">
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
