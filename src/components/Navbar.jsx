import { Download, Globe, Moon, Search, Sun } from "lucide-react";
import logo from "../assets/binance-log.png";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className="fixed top-0 z-10 dark:bg-gray-900 w-screen h-14 backdrop-blur-md tracking-tight">
      <div className="w-full h-full flex justify-between items-center px-4 md:px-8">
        <div className="flex gap-4 justify-center items-center">
          <img src={logo} alt="Logo" className="w-32 cursor-pointer" />
          <ul className="hidden md:flex gap-4 items-center justify-center font-medium text-sm dark:text-white">
            <li className="cursor-pointer hover:text-amber-300">Buy Crypto</li>
            <li className="cursor-pointer hover:text-amber-300">Markets</li>
            <li className="cursor-pointer hover:text-amber-300">Trade</li>
            <li className="cursor-pointer hover:text-amber-300">Futures</li>
            <li className="cursor-pointer hover:text-amber-300">Earn</li>
            <li className="cursor-pointer hover:text-amber-300">Square</li>
            <li className="cursor-pointer hover:text-amber-300">More</li>
          </ul>
        </div>

        <div className="flex justify-center items-center gap-5 text-sm dark:text-white">
          <Search className="hover:text-amber-300 cursor-pointer hidden sm:flex" />
          <button className="p-2 rounded-md font-semibold bg-gray-200 hover:bg-gray-100 cursor-pointer hidden sm:flex dark:hover:bg-gray-700 dark:bg-gray-600 dark:text-white">
            Log In
          </button>
          <button className="p-2 rounded-md font-semibold bg-amber-300 hover:bg-amber-200 cursor-pointer hidden sm:flex dark:hover:bg-amber-400 dark:text-black">
            Sign Up
          </button>
          <Download className="hover:text-amber-300 cursor-pointer hidden md:flex" />
          <Globe className="hover:text-amber-300 cursor-pointer hidden md:flex" />

          <span onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? (
              <Sun className="hover:text-amber-300 cursor-pointer hidden sm:flex dark:text-white" />
            ) : (
              <Moon className="hover:text-amber-300 cursor-pointer hidden sm:flex" />
            )}
          </span>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
