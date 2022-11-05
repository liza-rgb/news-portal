import React from "react";
import AuthorTag from "../AuthorTag";
import CategoryTag from "../CategoryTag";

import { PostsDataProps } from "../../postsData";

import TimeTag from "../TimeTag";

interface CardProps {
  post: PostsDataProps;
}

const Card: React.FC<CardProps> = ({ post }) => {
  return (
    <div className="Card max-w-[400px] space-y-3" id={post.id}>
      <img
        src={post.image}
        alt={post.title}
        title={post.title}
        className="h-[246px] w-full"
      />
      <CategoryTag name={post.category} className="text-purple-main" />
      <h4>{post.title}</h4>
      <div className="flex justify-between text-black-secondary opacity-50">
        <AuthorTag author={post.author} />
        <TimeTag time={post.time} />
      </div>
    </div>
  );
};

export default Card;
