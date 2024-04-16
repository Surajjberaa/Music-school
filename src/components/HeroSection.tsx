import Link from 'next/link'
import React from 'react'
import {Spotlight} from "./ui/Spotlight"
import { HoverBorderGradient } from "./ui/hover-border-gradient";

function HeroSection() {
  return (
    <div 
    className="h-[50rem] md:h-[50rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 "
    >
         <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
        />
        <div className="p-4 relative z-10 w-full text-center">

            <h1
            className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent'
            >Master the art of music</h1>
            <p
            className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'
            >Dive into our comprehensive music courses and transform your musical journey today. Whether you're a beginner or looking to refine your skills, join us to unlock your true potential.</p>
            <div className='mt-4 flex justify-center'>
                <Link href={"/courses"}>
                <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        <span>Explore Courses</span>
      </HoverBorderGradient>
                    </Link>

            </div>

        </div>
    
    </div>
  )
}

const AceternityLogo = () => {
    return (
      <svg
        width="66"
        height="65"
        viewBox="0 0 66 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-3 w-3 text-white"
      >
        <path
          d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
          stroke="currentColor"
          strokeWidth="15"
          strokeMiterlimit="3.86874"
          strokeLinecap="round"
        />
      </svg>
    );
  };

export default HeroSection