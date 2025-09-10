import Card from "./Card";
import NewsCard from "./NewsCard";

const Hero = () => {
  return (
    <div className="w-full h-full tracking-tight flex flex-col md:flex-row gap-16 justify-between pt-32 ">
      <div className="w-full md:w-1/2 ">
        <h2 className="text-5xl md:text:6xl lg:text-8xl uppercase font-bold dark:text-white">
          <span className="text-amber-400">288,113,332</span> <br /> users{" "}
          <br />
          trust us
        </h2>

        <div className="flex gap-3 mt-8">
          <input
            type="text"
            className="w-1/2 px-4 py-2 md:py-3 rounded-md focus:ring-amber-400 ring ring-gray-400 hover:ring-amber-400 placeholder:text-gray-400"
            placeholder="Email/Phone Number"
          />
          <button className="px-10 py-2 md:py-3 rounded-md bg-amber-400 cursor-pointer dark:hover:bg-amber-500">
            Sign Up
          </button>
        </div>
      </div>

      <div className="w-full md:w-1/2 h-full flex flex-col gap-8">
        <Card />
        <NewsCard />
      </div>
    </div>
  );
};
export default Hero;
