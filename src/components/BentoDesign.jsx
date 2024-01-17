import React, { Component } from "react";

class BentoGrid extends Component {
  render() {
    return (
      <div className=" flex flex-wrap justify-between relative h-full gap-10 pt-20">
        <div className=" w-72 overflow-hidden rounded-sm bg-slate-700 bg-opacity-15 transition-transform transform group-hover:scale-105 ">
          <div className="image  w-full relative ">
            <img src="/images/spider-man.jpg" alt=" " className="h-44 w-full" />
          </div>
          <div className="content p-2 flex-col gap-2 flex  ">
            <h2 className="text-white text-3xl">Movies</h2>
            <p className="text-white text-xs text-justify pb-2">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              tenetur ea hic omnis deserunt quaerat veritatis esse quibusdam
              sunt! Repellat! Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Deserunt, reprehenderit! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Unde, ullam?
            </p>
            <button
              type="button"
              class="text-white bg-red-500 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Read More
            </button>
          </div>
        </div>
        <div className=" w-72 overflow-hidden rounded-sm bg-slate-700 bg-opacity-15 ">
          <div className="image  w-full relative ">
            <img src="/images/spider-man.jpg" alt=" " className="h-44 w-full" />
          </div>
          <div className="content p-2 flex-col gap-2 flex  ">
            <h2 className="text-white text-3xl">TV Shows</h2>
            <p className="text-white text-xs text-justify pb-2">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              tenetur ea hic omnis deserunt quaerat veritatis esse quibusdam
              sunt! Repellat! Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Deserunt, reprehenderit! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Unde, ullam?
            </p>
            <button
              type="button"
              class="text-white bg-red-500 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Read More
            </button>
          </div>
        </div>
        <div className=" w-72 overflow-hidden rounded-sm bg-slate-700 bg-opacity-15 ">
          <div className="image  w-full relative ">
            <img src="/images/spider-man.jpg" alt=" " className="h-44 w-full" />
          </div>
          <div className="content p-2 flex-col gap-2 flex  ">
            <h2 className="text-white text-3xl">Stream</h2>
            <p className="text-white text-xs text-justify pb-2 ">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              tenetur ea hic omnis deserunt quaerat veritatis esse quibusdam
              sunt! Repellat! Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Deserunt, reprehenderit! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Unde, ullam?
            </p>

            <button
              type="button"
              class="text-white bg-red-500 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default BentoGrid;
