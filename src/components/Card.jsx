import { useState } from "react";
import { newListingData, popularData } from "../constants/data";

const Card = () => {
  const [data, setData] = useState("Popular");

  return (
    <div className="w-1/3 border border-yellow-200 rounded-md p-6 flex flex-col justify-between">
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
                <div>${data.price}</div>
                <div>{data.stocks}</div>
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
                  <span className="text-gray-400 text-sm">{data.subName}</span>
                </div>
                <div>${data.price}</div>
                <div>{data.stocks}</div>
              </div>
            </div>
          ))}
    </div>
  );
};
export default Card;
