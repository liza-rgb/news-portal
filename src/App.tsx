import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";
import {
  INDEX_ROUTE,
  HOME_PAGE_ROUTE,
  NEWS_PAGE_ROUTE,
  POSTS_PAGE_ROUTE,
  ABOUT_PAGE_ROUTE,
  CONTACT_PAGE_ROUTE,
  NEWS_ITEM_PAGE_ROUTE,
  POSTS_ITEM_PAGE_ROUTE,
} from "./config/routes";
import About from "./pages/About";
import Contacts from "./pages/Contacts";

import Container from "./pages/Container";
import Home from "./pages/Home";
import News from "./pages/News";
import NewsItem from "./pages/Item";
import Posts from "./pages/Posts";

import { ItemType } from "./pages/Item/Item";

function App() {
  return (
    <Routes>
      <Route path={INDEX_ROUTE} element={<Container />}>
        <Route path={HOME_PAGE_ROUTE} element={<Home />} />
        <Route path={NEWS_PAGE_ROUTE} element={<News />} />
        <Route
          path={NEWS_ITEM_PAGE_ROUTE}
          element={<NewsItem type={ItemType.NEWS} />}
        />
        <Route path={POSTS_PAGE_ROUTE} element={<Posts />} />
        <Route
          path={POSTS_ITEM_PAGE_ROUTE}
          element={<NewsItem type={ItemType.POST} />}
        />
        <Route path={ABOUT_PAGE_ROUTE} element={<About />} />
        <Route path={CONTACT_PAGE_ROUTE} element={<Contacts />} />
        <Route path={"*"} element={<Navigate replace to={HOME_PAGE_ROUTE} />} />
      </Route>
    </Routes>
  );
}

export default App;
