import React from "react";
import Navbar from "./navbar/Navbar";

const Landing = () => {
  return (
    <>
      <div className=" bg-gradient-to-b from-fuchsia-300 to-fuchsia-200 w-full flex flex-col min-h-[100vh] relative z-0">
        {/* top */}
        <div className="">
          <img
            src="/images/cr1.svg"
            alt=""
            className=" hidden md:flex lg:flex xl:flex absolute top-[-0.8rem] right-0 h-[5rem] w-[5rem] transform rotate-180"
          />
          {/* navbar */}
          <div className=" mt-2 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0 pt-3">
            <div className="flex justify-center items-center">
              <Navbar />
            </div>
          </div>
        </div>

        {/* middle */}
        <div className="mt-24 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0 relative z-10 pt-10 sm:pt-15 md:pt-10 lg:pt-6 xl:pt-10 ">
          <div
            className="flex justify-center items-center  h-[49vh] w-full xl:w-[100%] mx-auto sm:h-[65vh] md:h-[70vh] lg:h-[74vh] xl:h-[84vh]  bg-cover bg-center z-10 "
            style={{
              backgroundImage: `url("/images/Website.svg")`,
              // Responsive height
            }}
          >
            <div className="flex items-center justify-center absolute inset-0">
              <div  className="mt-6 sm:mt-4 md:mt-4 lg:mt-0 xl:mt-4 text-white text-4xl  sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold">DS Hack24</div>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className=" mt-10  xl:mb-10 sm:mt-8 md:mt-9 lg:mt-8 xl:mt-6 flex justify-center items-center text-black font-bold text-xl z-40">
            <p>Register btn</p>
        </div>
        {/* <div
          className="flex justify-center mb-2 bg-cover bg-center z-20"
          style={{
            backgroundImage: `url("/images/regbtn.png")`,
            height: ["sm:h-24", "md:h-16", "lg:h-24", "xl:h-16"], // Responsive height
            width: "full", // Full width
          }}
        > */}
          {/* image bottom left */}
          <img
            src="/images/cr1.svg"
            alt=""
            className=" hidden sm:flex md:flex lg:flex xl:flex absolute bottom-[-0.8rem] left-0 h-[7rem] w-[7rem]"
          />
        {/* </div> */}
      </div>
    </>
  );
};

export default Landing;
