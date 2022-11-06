import React from "react";

import SupportButton from "../SupportButton";
import { ReactComponent as YouTubeIcon } from "../../icons/youtube.svg";
import { ReactComponent as TelegramIcon } from "../../icons/telegram.svg";
import { ReactComponent as TikTokIcon } from "../../icons/tiktok.svg";
import { ReactComponent as TwitterIcon } from "../../icons/twitter.svg";

const Footer = () => {
  return (
    <div className="Footer bg-black-regular text-white grid grid-cols-10 px-14 py-10">
      <div className="col-span-3">
        <a href="/" title="До головної">
          <img
            src={require("../../assets/logo-light.png")}
            alt="Газетяр"
            className="h-[30px]"
          />
        </a>
        <p className="font-thin text-md pt-8">
          Всі права захищені: <br /> © Газетяр 2022.
        </p>
      </div>
      <div className="col-span-4">
        <div className="flex space-x-8">
          <a href="https://t.me/gazetyar" target="blank" title="Мій Telegram">
            <TelegramIcon className="w-8 h-8 hover:text-purple-main" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCK7AWluPVrfl2vHYAX5Z_dw"
            target="blank"
            title="Мій YouTube"
          >
            <YouTubeIcon className="w-8 h-8 hover:text-purple-main" />
          </a>
          <a href="#" title="Мій TikTok">
            <TikTokIcon className="w-8 h-8 hover:text-purple-main" />
          </a>
          <a href="#" title="Мій Twitter">
            <TwitterIcon className="w-8 h-8 hover:text-purple-main" />
          </a>
        </div>
        <div className="grid grid-cols-2 mt-5">
          <div className="space-y-2">
            <a
              href="/"
              className="block font-bold text-md hover:text-purple-main"
            >
              Головна
            </a>
            <a
              href="/news"
              className="block font-bold text-md hover:text-purple-main"
            >
              Новини
            </a>
            <a
              href="/posts"
              className="block font-bold text-md hover:text-purple-main"
            >
              Тексти
            </a>
          </div>
          <div className="space-y-2">
            <a
              href="/about"
              className="block font-bold text-md hover:text-purple-main"
            >
              Про мене
            </a>
            <a
              href="/contact"
              className="block font-bold text-md hover:text-purple-main"
            >
              Контакти
            </a>
          </div>
        </div>
      </div>
      <div className="col-span-3 text-center">
        <SupportButton />
        <div className="text-md font-thin pt-5">
          <p>Підтримай Газетяр.</p>
          <p>Ми працюємо для тебе.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
