import { useState } from "react";
import { AccordianData } from "../constants/data";

const Accordian = () => {
  const [open, setOpen] = useState(null);

  const toggleAccordian = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className="mt-12 mb-12 w-full dark:text-white tracking-tight">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-10 tracking-tight">
        Frequently Asked Questions
      </h1>

      <div className="w-full">
        {AccordianData.map((data, index) => (
          <div key={data.id} className=" mb-1 p-8">
            <p
              className="w-full flex justify-between items-center font-bold text-xl md:text-2xl cursor-pointer"
              onClick={() => toggleAccordian(index)}
            >
              {data.question} <span>{open === index ? "-" : "+"}</span>
            </p>
            {open === index && (
              <p className="mt-3 text-gray-500 dark:text-gray-400">
                {data.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Accordian;
