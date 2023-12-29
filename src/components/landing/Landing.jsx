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
          <div className="pt-3">
            <div className="flex justify-center items-center">
              <Navbar />
            </div>
          </div>
        </div>

        {/* middle */}
        <div className=" relative z-10 mt-20 sm:mt-6 md:mt-6 lg:mt-6 xl:mt-6 ">
          <div
            className="flex justify-center items-center  h-[56vh] w-full xl:w-[100%] mx-auto sm:h-[70vh] md:h-[75vh] lg:h-[75vh] xl:h-[85vh]  bg-cover bg-center z-10 "
            style={{
              backgroundImage: `url("/images/bg2.png")`,
              // Responsive height
            }}
          >
            <div className="flex items-center justify-center absolute inset-0">
              <div  className="text-white  text-4xl font-bold">DS Hack24</div>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className=" mt-16 xl:mb-10 md:mt-4 lg:mt-6 flex justify-center items-center text-black font-bold text-xl z-40">
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
            className="absolute bottom-[-0.8rem] left-0 h-[7rem] w-[7rem]"
          />
        {/* </div> */}
      </div>
    </>
  );
};

export default Landing;
