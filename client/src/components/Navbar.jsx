import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { ArrowRight } from "lucide-react";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { openSignIn } = useClerk();

  return (
    <div className="fixed top-0 z-50 w-full bg-gray-900/80 backdrop-blur-md flex justify-between items-center py-3 px-4 sm:px-20 xl:px-32 shadow-md border-b border-gray-800">
      {/* Logo */}
      <img
        onClick={() => navigate("/")}
        src={assets.logo}
        alt="logo"
        className="w-32 sm:w-44 cursor-pointer brightness-110"
      />

      {/* Right Section */}
      {user ? (
        <div className="flex items-center gap-3">
          <UserButton afterSignOutUrl="/" />
        </div>
      ) : (
        <button
          onClick={openSignIn}
          className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-indigo-600 hover:bg-indigo-700 transition-all duration-200 text-white px-8 py-2.5 shadow-lg"
        >
          Get started <ArrowRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default Navbar;
