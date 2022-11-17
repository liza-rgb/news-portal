import React, { useEffect } from "react";

import postsData from "../../postsData";

import Hero from "../../components/Hero";
import NewsSummary from "../../components/NewsSummary";
import Card from "../../components/Card";

const Home: React.FC = () => {
  useEffect(() => {
    document.title = "Газетяр: Головна";
  }, []);

  const lastPosts = postsData.slice(-6).reverse();

  return (
    <div className="Home mt-5">
      <div className="grid md:grid-cols-11 sm:grid-cols-1">
        <div className="md:col-span-7">
          <div>
            <Hero post={lastPosts[0]} />
          </div>
          <div className="grid sm:grid-cols-2 gap-y-12 md:max-lg:gap-y-5 gap-x-7 pt-8 sm:max-md:w-[730px] xs:max-sm:w-[500px] xs:max-sm:mt-3 mx-auto">
            {lastPosts.slice(1, 5).map((post, index) => {
              return <Card post={post} key={index} />;
            })}
          </div>
        </div>
        <div className="md:col-span-4 sm:max-md:mx-auto md:ml-auto pt-8 md:pt-0 xs:max-sm:w-[500px] max-xs:px-3 max-sm:mx-auto">
          <NewsSummary />
        </div>
      </div>
    </div>
  );
};

export default Home;
