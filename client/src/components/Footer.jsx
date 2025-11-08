import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-10 w-full text-gray-300 mt-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 border-t border-gray-800">
      {/* Main Section */}
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-700 pb-8">
        {/* Logo + Description */}
        <div className="md:max-w-96">
          <img className="h-9 brightness-125" src={assets.logo} alt="logo" />
          <p className="mt-6 text-sm text-gray-400 leading-relaxed">
            Experience the power of AI with <span className="text-indigo-400">QuickAi</span>. <br />
            Transform your content creation with our suite of intelligent tools.
            Write articles, generate images, and boost your productivity effortlessly.
          </p>
        </div>

        {/* Links + Newsletter */}
        
      </div>

      {/* Footer Bottom */}
      <p className="pt-6 text-center text-xs md:text-sm text-gray-500">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Saurav-Gupta-13"
          className="text-indigo-400 hover:underline"
        >
          Saurav Gupta
        </a>
      </p>
    </footer>
  );
};

export default Footer;
