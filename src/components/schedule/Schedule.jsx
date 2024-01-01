import logo from "./Logo.svg"
import tag from "./Tags.svg"
import top from "./Website.png"
import bottom from "./bottom.png"
const Schedule = () => {
  return (
    <div className="relative w-full h-auto pb-10 sm:pb-10 md:pb-20 bg-[#EFBBFF] flex flex-col py-10 gap-y-14 sm:gap-y-14 md:gap-y-28">
      <img
        src={top}
        alt=""
        className="absolute top-0 right-0 hidden sm:hidden md:block"
      />
      <img
        src={bottom}
        alt=""
        className="absolute bottom-0 left-0 hidden sm:hidden md:block"
      />
      {/* bg image */}
      <img
        src={logo}
        alt="Centered Image"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{ maxWidth: "80%", maxHeight: "80%" }}
      />
      <div className="relative w-full flex items-center justify-center text-3xl sm:text-3xl md:text-6xl font-bold text-[#660066] ">
        SCHEDULE
      </div>

      <div className="relative w-full flex flex-col items-center justify-center">
        <img
          src={tag}
          alt=""
          className="relative w-[90vw] sm:w-[90vw] md:w-[50vw] pb-10"
        />
        <img
          src={tag}
          alt=""
          className="relative w-[90vw] sm:w-[90vw] md:w-[50vw] pb-10 "
        />
        <img
          src={tag}
          alt=""
          className="relative w-[90vw] sm:w-[90vw] md:w-[50vw] pb-10 "
        />

        <img
          src={tag}
          alt=""
          className="relative w-[90vw] sm:w-[90vw] md:w-[50vw] pb-10 "
        />
        <img
          src={tag}
          alt=""
          className="relative w-[90vw] sm:w-[90vw] md:w-[50vw]"
        />
      </div>
    </div>
  )
}

export default Schedule
