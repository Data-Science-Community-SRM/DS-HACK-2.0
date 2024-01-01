import logo from "./logo.svg"
import line1 from "./line1.png"
import line2 from "./line2.png"
import centre from "./centre.svg"
import top from "./top.png"
import bottom from "./bottom.png"
const Cheif = () => {
  return (
    // main div
    <div className="relative w-full h-auto pb-10 sm:pb-10 md:pb-20 bg-[#800080] flex flex-col py-10 gap-y-14 sm:gap-y-14 md:gap-y-28">
      <img
        src={top}
        alt=""
        className="absolute top-0 left-0 hidden sm:hidden md:block"
      />
      <img
        src={bottom}
        alt=""
        className="absolute bottom-0 right-0 hidden sm:hidden md:block"
      />
      {/* bg image */}
      <img
        src={logo}
        alt="Centered Image"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{ maxWidth: "80%", maxHeight: "80%" }}
      />
      <div className="relative w-full flex items-center justify-center text-3xl sm:text-3xl md:text-6xl font-bold text-[#EFBBFF] ">
        CHIEF GUESTS
      </div>
      <img
        src={line1}
        alt=""
        className="absolute translate-y-96 translate-x-40 hidden sm:hidden md:block h-56"
      />
      <div className="relative w-full flex flex-col sm:flex-col md:flex-row  items-center justify-center gap-x-20">
        <div className="flex flex-col items-center justify-center gap-y-2 sm:gap-y-2 md:gap-y-5 text-[#EFBBFF] pb-10 sm:pb-10 md:pb-0">
          <img src={centre} alt="" className="" />
          <h1 className="text-4xl">Name</h1>
          <p>Field of specialisation</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-2 sm:gap-y-2 md:gap-y-5 text-[#EFBBFF] pb-10 sm:pb-10 md:pb-0">
          <img src={centre} alt="" className="" />
          <h1 className="text-4xl">Name</h1>
          <p>Field of specialisation</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-2 sm:gap-y-2 md:gap-y-5 text-[#EFBBFF] pb-10 sm:pb-10 md:pb-0">
          <img src={centre} alt="" className="" />
          <h1 className="text-4xl">Name</h1>
          <p>Field of specialisation</p>
          <img
            src={line2}
            alt=""
            className="absolute -translate-y-64 translate-x-32 hidden sm:hidden md:block h-56"
          />
        </div>{" "}
      </div>
    </div>
  )
}

export default Cheif
