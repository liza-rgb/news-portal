import React from "react";

import { PostsDataProps } from "../../postsData";
import { convertToTranslit } from "../../pages/helpers/translitId";

import AuthorTag from "../AuthorTag";
import CategoryTag from "../CategoryTag";
import TimeTag from "../TimeTag";

interface HeroProps {
  post: PostsDataProps;
}

const Hero: React.FC<HeroProps> = ({ post }) => {
  return (
    <div className="Hero relative">
      <img
        src={post.image}
        alt={post.title}
        title={post.title}
        className="h-[500px] w-full"
      />
      <div className="absolute bottom-[30px] px-4 text-white">
        <CategoryTag name={post.category} />
        <a href={"/posts/" + convertToTranslit(post.title)}>
          <h1 className="pb-3 hover:text-purple-main">{post.title}</h1>
        </a>
        <div className="flex">
          <AuthorTag author={post.author} />
          <span className="text-sm px-1">—</span>
          <TimeTag time={post.time} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
