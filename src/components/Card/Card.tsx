import React from "react";
import { POSTS_PAGE_ROUTE } from "../../config/routes";

import { PostsDataProps } from "../../postsData";
import { convertToTranslit } from "../../pages/helpers/translitId";

import TimeTag from "../TimeTag";
import AuthorTag from "../AuthorTag";
import CategoryTag from "../CategoryTag";

interface CardProps {
  post: PostsDataProps;
}

const Card: React.FC<CardProps> = ({ post }) => {
  return (
    <a
      href={POSTS_PAGE_ROUTE + "/" + convertToTranslit(post.title)}
      title="Переглянути текст"
    >
      <div
        className="Card sm:max-w-[400px] space-y-3 hover:text-purple-main relative"
        id={post.id}
      >
        <img
          src={post.image}
          alt={post.title}
          title={post.title}
          className="xl:h-[246px] sm:h-[200px] h-[320px] w-full object-cover max-sm:brightness-50"
        />
        <div className="space-y-3 max-sm:absolute max-sm:bottom-[20px] max-sm:px-4">
          <CategoryTag
            name={post.category}
            className="text-white sm:text-purple-main"
          />
          <h4 className="max-sm:text-white">{post.title}</h4>
          <div className="flex justify-between text-white sm:text-black-secondary sm:opacity-50">
            <AuthorTag author={post.author} />
            <TimeTag time={post.time} />
          </div>
        </div>
      </div>
    </a>
  );
};

export default Card;
