// MovieCard.jsx
import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart, AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const MovieCard = ({ title, imageSrc, rates, path }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleToggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <div className="relative group bg-slate-700 bg-opacity-15 rounded-sm overflow-hidden">
      <img src={imageSrc} alt={title} className="w-full h-44 object-cover" />

      <div className="absolute h-44 inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={handleToggleFavorite}
          className={`text-white text-2xl p-2 rounded-full ${
            isFavorite ? "bg-red-500" : "bg-transparent border border-white"
          } transition-colors duration-300 focus:outline-none`}
        >
          {isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
        </button>
        <Link to={`/movies/${path}/${title}/${rates}`}>
          <button className="text-white text-2xls h-10 w-10 p-2 ml-4 bg-red-500 rounded-full items-center transition-transform transform scale-0 group-hover:scale-100 focus:outline-none">
            ▶
          </button>
        </Link>
      </div>

      <div className="text-white pt-2 px-2 flex flex-col gap-3">
        <p className="pb-3">{title}</p>
        <div className="rating text-yellow text-2xs flex gap-2 pb-4">
          {Array.from({ length: rates }).map((_, index) => (
            <AiFillStar key={index} className="text-yellow-400" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
