import Card from "./Card";

const Hero = () => {
  return (
    <div className="w-full tracking-tight flex">
      <div className="">
        <h2 className="text-7xl uppercase font-bold dark:text-white">
          <span className="text-amber-400">288,113,332</span> <br /> users{" "}
          <br />
          trust us
        </h2>

        <div className="flex gap-3 mt-8">
          <input
            type="text"
            className="px-4 py-3 rounded-md focus:ring-amber-400 ring ring-gray-400 hover:ring-amber-400 placeholder:text-gray-400"
            placeholder="Email/Phone Number"
          />
          <button className="px-6 py-3 rounded-md bg-amber-400 cursor-pointer">
            Sign Up
          </button>
        </div>
      </div>
      <Card />
    </div>
  );
};
export default Hero;
