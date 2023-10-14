import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute pt-[22%] px-12 w-screen aspect-video bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold text-white">{title}</h1>
      <p className="py-6 text-lg w-1/4 text-white">{overview}</p>
      <div>
        <button className="bg-white text-2xl rounded-md px-4 py-2 mr-4 hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="text-2xl rounded-md px-4 py-2 bg-gray-500 bg-opacity-50 text-white hover:bg-opacity-30">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
