import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute pt-[12%] px-12 w-screen aspect-video bg-gradient-to-r from-black">
      <h1 className="md:text-6xl text-2xl font-bold text-white">{title}</h1>
      <p className="hidden md:block py-6 text-lg w-1/4 text-white">
        {overview}
      </p>
      <div>
        <button className="bg-white md:text-2xl rounded-md px-4 md:py-2 py-1 mr-4 mt-4 md:mt-0 hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="hidden md:inline-block text-2xl rounded-md px-4 py-2 bg-gray-500 bg-opacity-50 text-white hover:bg-opacity-30">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
