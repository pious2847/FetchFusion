import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';

const GlassAppBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="backdrop-filter backdrop-blur-sm bg-opacity-20 fixed px-10 max-w-screen-md:px-40 lg:px-20 xl:px-40 pt-5  left-0 w-full flex justify-between items-center z-50">
      <div className="text-white font-bold text-2xl flex items-center">
        <img src="/images/logo.svg" alt="" className="h-10 w-10" />
        <span className="ml-2">FetchFusion</span>
      </div>
      <div className="lg:hidden">
        <button
          className="text-white"
          onClick={toggleMenu}
        >
          <AiOutlineMenu size={24} />
        </button>
      </div>

      <div className={`lg:flex items-center ${menuOpen ? 'flex flex-col' : 'hidden'} navproperties bg-opacity-75 `}>
        <Link to="/" className="text-white hover:underline py-2 lg:py-0 lg:px-4">Home</Link>
        <Link to="/movie-player" className="text-white hover:underline py-2 lg:py-0 lg:px-4">Movies</Link>
        <Link to="/" className="text-white hover:underline py-2 lg:py-0 lg:px-4">TV Shows</Link>
        <Link to="/" className="text-white hover:underline py-2 lg:py-0 lg:px-4">Login</Link>
      </div>
    </div>
  );
};

export default GlassAppBar;
