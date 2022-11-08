import React from "react";
import { POSTS_PAGE_ROUTE } from "../../config/routes";

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
        className="xl:h-[500px] lg:h-[330px] md:h-[300px] sm:h-[450px] max-xs:h-[420px] w-full object-cover brightness-50"
      />
      <div className="absolute md:bottom-[30px] md:px-4 bottom-[40px] px-10 text-white">
        <CategoryTag name={post.category} />
        <a
          href={POSTS_PAGE_ROUTE + "/" + convertToTranslit(post.title)}
          title="Переглянути текст"
        >
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
