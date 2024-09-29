import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='w-full flex flex-col items-center'>
      <h2 className='text-3xl font-bold text-center mb-10'>Skills.</h2>
      
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <img src={technology.icon} alt={technology.name} className='w-full h-full object-contain' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
