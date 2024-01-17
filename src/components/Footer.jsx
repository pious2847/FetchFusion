import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="w-[100%] bg-slate-600 px-4 bg-opacity-10 flex flex-wrap justify-between gap-10 pb-10 pt-10 border-t-[0.5px]">
      <div className="caption w-96 flex flex-col gap-5">
        <button className="btn btn-primary p-2 bg-red-400 bg-opacity-15 w-[40%]  text-white items-center justify-center rounded-full flex">
          <img src="/images/logo.svg" alt="" className="h-8 w-8" />
          FetchFusion
        </button>
        <p className="text-white">
          Watch your favourite movies and TV shows with this open source
          streaming app
        </p>
        <div className="flex gap-6">
          <Link
            to="#"
            onClick={() => openInNewTab("https://github.com/pious2847")}
            className="btn btn-primary p-2 bg-slate-700 bg-opacity-15 w-[40%]  text-white items-center justify-center rounded-full flex"
          >
            <img src="/images/logo.svg" alt="" className="h-8 w-8" />
            Github
          </Link>
          <Link
            to="#"
            onClick={() => openInNewTab("https://t.me/code_demond")}
            className="btn btn-primary p-2 bg-teal-400 bg-opacity-15 w-[40%]  text-white items-center justify-center rounded-full flex"
          >
            <img src="/images/logo.svg" alt="" className="h-8 w-8" />
            Telegram
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-5 text-right text-white w-[35rem]">
        <h3 className="font-thin text-2xl">Disclaimer</h3>
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ipsum
          vero voluptatem repellat repudiandae consectetur nobis. Officiis,
          consectetur quas. Corporis?
        </p>
        <p className="p-2 w-full">Design by Code Demon </p>
      </div>
    </div>
  );
};

export default Footer;
