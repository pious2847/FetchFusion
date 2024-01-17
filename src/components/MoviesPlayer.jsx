import React from "react";
import Movies from "./Movies";
import Footer from "./Footer";
import {
  AiFillLike,
  AiFillDislike,
  AiOutlineEye,
  AiFillStar,
} from "react-icons/ai";
import {
  Player,
  ControlBar,
  LoadingSpinner,
  PlayToggle,
  BigPlayButton,
  ReplayControl,
  ForwardControl,
  VolumeMenuButton,
} from "video-react";

const MoviePlayer = ({ match }) => {
  console.log(match.params.path);
  return (
    <>
      <div
        className="relative pt-20  items-start gap-2 main px-40 h-screen w-full flex-wrap  flex"
        id="main"
      >
        <div className="flex flex-col gap-5 w-[100%] bg-slate-700 bg-opacity-15 rounded-lg overflow-hidden">
          <Player
            src={`/videos/` + match.params.path}
            poster="/images/defaultbanner.png"
            height="300px"
            autoPlay
          >
            <LoadingSpinner />
            <BigPlayButton position="center" />
            <ControlBar>
              <PlayToggle order={1} />
              <ReplayControl order={2} />
              <ForwardControl order={3} />
              <VolumeMenuButton key="volume-menu-button" />
            </ControlBar>
          </Player>
          <div className="caption text-white flex flex-col gap-3 px-3 pb-3">
            <div className="flex gap-10">
              <h3 className=" text-2xl font-light">{match.params.title}</h3>
              <button className="flex items-center justify-center p-2 rounded-full bg-cyan-400 bg-opacity-10 w-14 gap-2">
                <AiFillLike className="text-2xl" />
              </button>
              <button className="flex items-center p-2 rounded-full bg-red-400 bg-opacity-10 w-14 justify-center gap-2">
                <AiFillDislike className="text-2xl" />
              </button>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A quis
              doloribus modi officiis error reiciendis deserunt laudantium
              maxime corporis cupiditate aliquam natus excepturi officia sint
              fugit non ipsam nobis iste, amet atque! Tempore aspernatur cum
              aliquid officiis officia aperiam aliquam?
            </p>
            <div className=" items-center flex gap-4">
              <h2>Rating :</h2>
              <div className="rating text-yellow text-2xs flex gap-2">
                {Array.from({ length: match.params.rates }).map((_, index) => (
                  <AiFillStar key={index} className="text-yellow-400" />
                ))}
              </div>
            </div>
            <div className="reviews items-center flex gap-4">
              <p className="text-xl">
                <AiOutlineEye />
              </p>
              <p>10</p>
            </div>
          </div>
        </div>
        <div
          className="row-span-1  text-white pb-20 pt-5 "
          id="side-movie-container"
        >
          <Movies title="Daily Trends" />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default MoviePlayer;
