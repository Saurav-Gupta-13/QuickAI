import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="px-4 sm:px-20 xl:p-32 relative inline-flex flex-col w-full justify-center bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 text-gray-100 min-h-screen">
      {/* Heading + Sub */}
      <div className="text-center mb-6">
        <h1 className="text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-bold mx-auto leading-[1.2] text-white">
          Create amazing content <br /> with{" "}
          <span className="text-indigo-500 drop-shadow-lg">AI tools</span>
        </h1>
        <p className="mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl m-auto max-sm:text-xs text-gray-400">
          Transform your content creation with our suite of premium AI tools.
          Write articles, generate images, and enhance your workflow.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4 text-sm max-sm:text-xs mt-4">
        <button
          onClick={() => navigate("/ai")}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-3 rounded-lg shadow-md hover:shadow-indigo-500/40 transition-all duration-200 hover:scale-105 active:scale-95"
        >
          Start creating now
        </button>
        
      </div>


      {/* Logos Marquee */}
    </div>
  );
};

export default Hero;
