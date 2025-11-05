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
        <div className="flex-1 flex flex-col sm:flex-row md:justify-end gap-16">
          {/* Company Links */}
          <div>
            <h2 className="font-semibold mb-5 text-white text-lg">Company</h2>
            <ul className="text-sm space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors duration-200">Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors duration-200">About us</a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors duration-200">Contact us</a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors duration-200">Privacy policy</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="font-semibold text-white mb-5 text-lg">
              Subscribe to our newsletter
            </h2>
            <div className="text-sm space-y-3 text-gray-400">
              <p>
                Get the latest updates, tools, and AI insights delivered weekly.
              </p>
              <div className="flex items-center gap-2 pt-3">
                <input
                  className="bg-gray-800/70 border border-gray-700 placeholder-gray-500 focus:ring-2 ring-indigo-500 outline-none w-full max-w-64 h-9 rounded px-3 text-gray-200"
                  type="email"
                  placeholder="Enter your email"
                />
                <button className="bg-indigo-600 hover:bg-indigo-700 w-24 h-9 text-white rounded transition-all duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <p className="pt-6 text-center text-xs md:text-sm text-gray-500">
        © 2025{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://elyse502.github.io/Elysee-Portfolio"
          className="text-indigo-400 hover:underline"
        >
          Saurav Gupta
        </a>
        . All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
