const Prizes = () => {
  return (
    <div className="bg-[#660066] text-center relative h-screen flex flex-col items-center justify-center">
      <img
        src="src\components\prizes\top.png"
        alt=""
        className="absolute top-0 left-0 hidden sm:hidden md:block"
      />
      <img
        src="src\components\prizes\bottom.png"
        alt=""
        className="absolute bottom-0 right-0 hidden sm:hidden md:block"
      />
      <img
        src="src\components\prizes\dsc_logo.png"
        alt="logo"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{ maxWidth: "80%", maxHeight: "80%" }}
      />
      <div className="absolute top-0 inset-x-0 p-8">
        <div className="relative w-full flex items-center justify-center text-3xl sm:text-3xl md:text-6xl font-bold text-[#EFBBFF]  ">
        PRIZES
      </div>
        <div className="flex md:flex-row md:justify-center md:items-end flex-col items-center md:mt-20">
          <img src="src\components\prizes\box1.png" alt="box1" className="md:size-64 mx-2 my-4 md:my-0 size-36" />
          <img src="src\components\prizes\box1.png" alt="box2" className="md:size-96 mx-8 my-4 md:my-0 size-36" />
          <img src="src\components\prizes\box1.png" alt="box3" className="md:size-64 mx-2 my-4 md:my-0 size-36" />
        </div>
      </div>
    </div>
  );
};

export default Prizes;
