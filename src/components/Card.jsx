import { useState } from "react";
import { newListingData, popularData } from "../constants/data";

const Card = () => {
  const [data, setData] = useState("Popular");

  return (
    <div className="h-72 ring ring-gray-400/20 rounded-md p-6 flex flex-col justify-between bg-gray-100/40 dark:bg-gray-800/40 mb-12">
      <div className="flex items-center justify-between dark:text-white">
        <div className="flex gap-3 items-center">
          <span
            className={`cursor-pointer text-gray-400 font-bold text-sm pb-1 border-b-amber-500 ${
              data === "Popular" ? "border-b-3" : ""
            }`}
            onClick={() => setData("Popular")}
          >
            Popular
          </span>{" "}
          <span
            className={`pb-1 text-gray-400 font-bold text-sm cursor-pointer border-b-amber-500 ${
              data === "New Listing" ? "border-b-3" : ""
            }`}
            onClick={() => setData("New Listing")}
          >
            New Listing
          </span>
        </div>
        <span className="pb-1 text-xs text-gray-400 font-semi-bold cursor-pointer">
          View All 350+ Coins {">"}
        </span>
      </div>

      {data === "Popular"
        ? popularData.map((data) => (
            <div key={data.id}>
              <div className="flex justify-between items-center dark:text-white">
                <div className="flex gap-1 justify-center items-center">
                  <img src={data.image} alt={data.name} className="w-8" />{" "}
                  <span className="hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer">
                    {data.name}
                  </span>{" "}
                  <span className="text-gray-400 text-sm">{data.subName}</span>
                </div>
                <div className="text-sm">${data.price}</div>
                <div
                  className={`text-sm ${
                    data.stocks > 0 ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {data.stocks > 0 ? "+" : ""}
                  {data.stocks}%
                </div>
              </div>
            </div>
          ))
        : newListingData.map((data) => (
            <div key={data.id}>
              <div className="flex justify-between items-center dark:text-white">
                <div className="flex gap-1 justify-center items-center">
                  <img src={data.image} alt={data.name} className="w-8" />{" "}
                  <span className="hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer">
                    {data.name}
                  </span>{" "}
                  <span className="text-gray-400 text-sm">
                    {data.subName.length > 12
                      ? data.subName.slice(0, 12) + "..."
                      : data.subName}
                  </span>
                </div>
                <div className="text-sm">${data.price}</div>
                <div
                  className={`text-sm ${
                    data.stocks > 0 ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {data.stocks > 0 ? "+" : ""}
                  {data.stocks}%
                </div>
              </div>
            </div>
          ))}
    </div>
  );
};

export default Card;
