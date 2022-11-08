import React from "react";
import {
  ABOUT_PAGE_ROUTE,
  CONTACT_PAGE_ROUTE,
  HOME_PAGE_ROUTE,
  NEWS_PAGE_ROUTE,
  POSTS_PAGE_ROUTE,
  TELEGRAM_CHANNEL_LINK,
  TIKTOK_CHANNEL_LINK,
  TWITTER_CHANNEL_LINK,
  YOUTUBE_CHANNEL_LINK,
} from "../../config/routes";

import SupportButton from "../SupportButton";
import { ReactComponent as YouTubeIcon } from "../../icons/youtube.svg";
import { ReactComponent as TelegramIcon } from "../../icons/telegram.svg";
import { ReactComponent as TikTokIcon } from "../../icons/tiktok.svg";
import { ReactComponent as TwitterIcon } from "../../icons/twitter.svg";

const Footer = () => {
  return (
    <div className="Footer bg-black-regular text-white grid grid-cols-1 sm:grid-cols-10 lg:px-14 md:px-10 px-8 lg:py-10 md:py-8 py-5">
      <div className="sm:col-span-3 max-sm:py-7">
        <a href="/" title="До головної">
          <img
            src={require("../../assets/logo-light.png")}
            alt="Газетяр"
            className="h-[30px] max-sm:mx-auto"
          />
        </a>
        <p className="font-thin md:text-md text-sm max-sm:pt-3 sm:pt-8 max-sm:text-center">
          Всі права захищені: <br /> © Газетяр 2022.
        </p>
      </div>
      <div className="sm:col-span-4 max-sm:order-first">
        <div className="flex sm:space-x-8 space-x-12 justify-center">
          <a href={TELEGRAM_CHANNEL_LINK} target="blank" title="Мій Telegram">
            <TelegramIcon className="w-8 h-8 hover:text-purple-main" />
          </a>
          <a href={YOUTUBE_CHANNEL_LINK} target="blank" title="Мій YouTube">
            <YouTubeIcon className="w-8 h-8 hover:text-purple-main" />
          </a>
          <a href={TIKTOK_CHANNEL_LINK} title="Мій TikTok">
            <TikTokIcon className="w-8 h-8 hover:text-purple-main" />
          </a>
          <a href={TWITTER_CHANNEL_LINK} title="Мій Twitter">
            <TwitterIcon className="w-8 h-8 hover:text-purple-main" />
          </a>
        </div>
        <div className="sm:grid grid-cols-2 mt-5 text-center hidden">
          <div className="space-y-2">
            <a
              href={HOME_PAGE_ROUTE}
              className="block font-bold text-md hover:text-purple-main"
            >
              Головна
            </a>
            <a
              href={NEWS_PAGE_ROUTE}
              className="block font-bold text-md hover:text-purple-main"
            >
              Новини
            </a>
            <a
              href={POSTS_PAGE_ROUTE}
              className="block font-bold text-md hover:text-purple-main"
            >
              Тексти
            </a>
          </div>
          <div className="space-y-2">
            <a
              href={ABOUT_PAGE_ROUTE}
              className="block font-bold text-md hover:text-purple-main"
            >
              Про мене
            </a>
            <a
              href={CONTACT_PAGE_ROUTE}
              className="block font-bold text-md hover:text-purple-main"
            >
              Контакти
            </a>
          </div>
        </div>
      </div>
      <div className="sm:col-span-3 text-center sm:text-right">
        <SupportButton />
        <div className="md:text-md text-sm font-thin sm:pt-5 pt-3">
          <p>Підтримай Газетяр.</p>
          <p>Ми працюємо для тебе.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
