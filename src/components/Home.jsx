import React from "react";
import HeroSection from "./HeroSection";
import BentoDesign from "./BentoDesign";
import Movies from "./Movies";
import Footer from "./Footer";

const Home = () => {
  return (
      <div className="main px-10 max-w-screen-md:px-40 lg:px-20 xl:px-40 h-screen w-full">
        <section className="px-50 pt-70 relative h-full bg-center">
          <HeroSection />
        </section>
        <section className=" px-50  justify-center items-center ">
          <BentoDesign />
        </section>
        <section className="pt-20 flex flex-wrap gap-4 ">
          <Movies title="Top Trending" />
        </section>
        <br></br>
        <br></br>
        <br></br>
        <section className="w-full">
          <Footer />
        </section>
      </div>
  );
};

export default Home;
