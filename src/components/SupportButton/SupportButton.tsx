import React from "react";
import { SUPPORT_US_LINK } from "../../config/routes";

import { ReactComponent as PiggyBankIcon } from "../../icons/piggy-bank.svg";

const SupportButton: React.FC = () => {
  return (
    <a
      href={SUPPORT_US_LINK}
      target="blank"
      className="relative inline-flex items-center justify-start p-3 
        overflow-hidden font-medium transition-all bg-gradient-to-r 
        from-green-light to-green-dark rounded
        hover:bg-white group border-2 border-transparent"
    >
      <span
        className="w-48 h-48 rounded rotate-[-40deg] bg-white absolute 
        bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all 
        translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 
        group-hover:translate-x-0"
      ></span>
      <span
        className="relative w-full text-left text-white transition-colors 
        duration-300 ease-in-out group-hover:text-green-dark flex"
      >
        <PiggyBankIcon className="h-[20px] w-[20px]" />
        <span className="ml-2 hidden lg:inline">Підтримати</span>
      </span>
    </a>
  );
};

export default SupportButton;
