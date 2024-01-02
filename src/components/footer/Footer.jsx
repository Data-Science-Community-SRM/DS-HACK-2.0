import DSClogo from "./DSClogo.png"
import FooterImg from "./FooterAbsoluteImg.png"
const Footer = () => {
  return (
    <>
      <footer className="relative w-full h-[35vh] bg-[#800080] flex flex-col items-center justify-center gap-y-16">
        <img
          src={DSClogo}
          alt="DSCLogo"
          className=" w-[50vw] sm:w-[50vw] md:w-[20vw]"
        />
        <div className="w-full h-10  flex items-center justify-center gap-5 sm:gap-5 md:gap-10">
          <div className="h-10 w-10 rounded-full bg-[#D896FF]"></div>
          <div className="h-10 w-10 rounded-full bg-[#D896FF]"></div>
          <div className="h-10 w-10 rounded-full bg-[#D896FF]"></div>
          <div className="h-10 w-10 rounded-full bg-[#D896FF]"></div>
          <div className="h-10 w-10 rounded-full bg-[#D896FF]"></div>
        </div>

        <img
          src={FooterImg}
          alt=""
          className="absolute right-0 bottom-0 hidden sm:hidden md:block"
        />
      </footer>
    </>
  )
}

export default Footer
