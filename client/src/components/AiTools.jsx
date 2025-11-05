import { useNavigate } from "react-router-dom";
import { AiToolsData } from "../assets/assets";
import { useUser } from "@clerk/clerk-react";

const AiTools = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  return (
    <div className="px-4 sm:px-20 xl:px-32 my-24 text-gray-100 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 py-20">
      {/* Section Header */}
      <div className="text-center">
        <h2 className="text-white text-[42px] font-semibold drop-shadow-lg">
          Powerful AI Tools
        </h2>
        <p className="text-gray-400 max-w-lg mx-auto mt-3">
          Everything you need to create, enhance, and optimize your content with
          cutting-edge AI technology.
        </p>
      </div>

      {/* Tools Grid */}
      <div className="flex flex-wrap mt-12 justify-center">
        {AiToolsData.map((tool, index) => (
          <div
            key={index}
            onClick={() => user && navigate(tool.path)}
            className="p-8 m-4 max-w-xs rounded-2xl bg-gray-900/60 border border-gray-700 hover:border-indigo-500 hover:shadow-indigo-500/30 shadow-lg backdrop-blur-md transition-all duration-300 cursor-pointer hover:-translate-y-1"
          >
            <tool.Icon
              className="w-12 h-12 p-3 text-white rounded-xl shadow-lg"
              style={{
                background: `linear-gradient(to bottom, ${tool.bg.from}, ${tool.bg.to})`,
              }}
            />
            <h3 className="mt-6 mb-2 text-lg font-semibold text-white">
              {tool.title}
            </h3>
            <p className="text-gray-400 text-sm max-w-[95%] leading-relaxed">
              {tool.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AiTools;
