import React from "react";
import MovieCard from "./common/MovieCard";

const Movies = ({ title }) => {
  const movies = [
    {
      _id: "1",
      src: "/images/movie1.jpg",
      title: "Alan Walker Emma Steinbakken Not",
      rates: 5,
      path: "Alan-Walker-Emma-Steinbakken-Not.mp4",
    },
    {
      _id: "2",
      src: "/images/spider-man.jpg",
      title: "Alan Walker Lost Control",
      rates: 6,
      path: "Alan-Walker-Lost-Control.mp4",
    },
    {
      _id: "3",
      src: "/images/spider-man.jpg",
      title: "The Rumbling Official Video",
      rates: 3,
      path: "The-Rumbling-OFFICIAL-VIDEO.mp4",
    },

    {
      _id: "4",
      src: "/images/movie1.jpg",
      title: "Imagine Dragons Playlist",
      rates: 4,
      path: "Imagine-Dragons-Playlist.mp4",
    },

    {
      _id: "5",
      src: "/images/movie1.jpg",
      title: "Alan Walker K391 Emelie Hollow Lily",
      rates: 4,
      path: "Alan-Walker-K391-Emelie-Hollow-Lily.mp4",
    },
    {
      _id: "6",
      src: "/images/spider-man.jpg",
      title: "Alan Walker Dash Berlin (Alone, Pt. III)",
      rates: 6,
      path: "Alan-Walker-Dash Berlin-(Alone- Pt. III).mp4",
    },
  ];
  return (
    <>
      <h2 className="text-2xl text-white pb-5">{title}</h2>
      <div className="w-full h-full justify-between items-center flex flex-wrap gap-5 ">
        {movies.map((movie, index) => (
          
            <MovieCard
              key={index}
              imageSrc={movie.src}
              title={movie.title}
              rates={movie.rates}
              path={movie.path}
            />
        ))}
      </div>
    </>
  );
};

export default Movies;
