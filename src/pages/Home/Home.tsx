import React from "react";

import postsData from "../../postsData";

import Hero from "../../components/Hero";
import NewsSummary from "../../components/NewsSummary";
import Card from "../../components/Card";

const Home: React.FC = () => {
  const lastPosts = postsData.slice(-6).reverse();

  return (
    <div className="Home mt-3">
      <div className="grid grid-cols-11">
        <div className="col-span-7">
          <div>
            <Hero post={lastPosts[0]} />
          </div>
          <div className="grid grid-cols-2 gap-x-10 gap-y-12 pt-8">
            {lastPosts.slice(1, 6).map((post) => {
              return <Card post={post} />;
            })}
          </div>
        </div>
        <div className="col-span-4 ml-auto">
          <NewsSummary />
        </div>
      </div>
    </div>
  );
};

export default Home;
