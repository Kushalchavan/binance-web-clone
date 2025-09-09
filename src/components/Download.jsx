import { useEffect, useRef, useState } from "react";
import scanner from "../assets/scanner.svg";
import desktopImg from "../assets/desktopimage.png";
import proImg from "../assets/proimage.png";
import liteImg from "../assets/liteimage.png";

const Download = () => {
  const [active, setActive] = useState("Pro");
  const [underlineStyle, setUnderlineStyle] = useState({});
  const tabRefs = useRef({});

  const tabs = ["Desktop", "Lite", "Pro"];

  useEffect(() => {
    const current = tabRefs.current[active];
    if (current) {
      setUnderlineStyle({
        width: current.offsetWidth,
        left: current.offsetLeft,
      });
    }
  }, [active]);

  const tabImages = {
    Desktop: desktopImg,
    Lite: liteImg,
    Pro: proImg,
  };

  return (
    <div className="w-full mt-30 mb-30 flex justify-center items-center dark:text-white tracking-tight">
      <div className="flex w-10/12 h-96 max-w-6xl items-center justify-between gap-12">
        {/* left side section */}
        <div className="relative flex flex-col items-center border-b border-gray-600">
          <div>
            <img src={tabImages[active]} alt={active} className="w-56 mb-6" />
          </div>

          {/* Tabs Row */}
          <div className=" flex gap-8 text-gray-400 text-lg">
            {tabs.map((tab) => (
              <button
                key={tab}
                ref={(el) => (tabRefs.current[tab] = el)}
                onClick={() => setActive(tab)}
                className={`pb-2 transition-colors cursor-pointer text-black text-sm dark:text-gray-400 ${
                  active === tab
                    ? "dark:text-white font-semibold"
                    : "dark:hover:text-gray-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Single underline */}
          <span
            className="absolute bottom-0 h-[2px] bg-amber-400 transition-all duration-300"
            style={{
              width: underlineStyle.width,
              left: underlineStyle.left,
            }}
          ></span>
        </div>

        {/* right side section */}
        <div className="flex flex-col gap-8 items-center text-center">
          <h3 className="dark:text-white text-3xl">
            Trade on the go. Anywhere anytime.
          </h3>

          <div className="mt-4 flex justify-center items-center gap-6">
            <div>
              <img src={scanner} alt="scanner" className="w-38" />
            </div>
            <div className="text-left">
              <p className="dark:text-gray-500 text-gray-400 text-sm">
                Scan to Download App
              </p>
              <p className="font-semibold">iOS and Android</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
