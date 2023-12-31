import React, { useState } from 'react';

const Tracks = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleRectangleClick = () => {
    setDialogOpen(true);
  };
  
    return ( 
        <div className="relative flex flex-col items-center justify-center bg-fuchsia-300 p-5 text-white w-90vw h-screen overflow-hidden transition all">
            <div className="flex justify-between w-full max-w-[345px]">
            <p className="absolute   flex items justify-center text-fuchsia-800 text-5xl left-[39%] right-[30%] top-[10%] font-bold max-[345px]:left-[30%] max-sm:text-4xl max-sm:left-[33%] sm:text-5xl">TRACKS</p>
            <img src="../../../public/tracks/Component 24.png" alt="Component-24" className="absolute top-[53%] left-[27%] w-[12%] h-[7%] max-[345px]:w-[16%] max-[345px]:h-auto max-sm:top-[43%] max-sm:left-[20%] max-sm:w-[15%] max-sm:h-[3%]" />
            <img src="../../../public/tracks/Component 25.png" alt="Component-25" className="absolute top-[53%] right-[27%] w-[12%] h-[7%] max-[345px]:w-[16%] max-[345px]:h-auto max-sm:top-[69.5%] max-sm:right-[20%] max-sm:w-[15%] max-sm:h-[3%]"/>
            <img src="../../../public/tracks/Component 14.png" alt="Component-14" className="absolute w-[20%] h-auto top-0 right-0 max-sm:hidden" />
            <img src="../../../public/tracks/Component 19.png" alt="Component-19" className="absolute bottom-0 left-0 w-[15%] h-auto max-sm:hidden" />
            <img src="../../../public/about/colour.png" alt="colour" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60%] h-[95%] max-w-full max-h-full max-w-full max-h-full max-sm:h-[60%] max-sm:w-[73%] sm:w-[60%] max-md:h-[75%]" />
            <img src="../../../public/tracks/Rectangle 11.png" alt="Tracks" className="absolute top-[22%] left-[12%] w-[16%] h-[29%] max-[345px]:w-[35%] max-[345px]:h-auto max-sm:w-[30%] max-sm:h-[20%]" 
            onClick={handleRectangleClick} style={{ cursor: 'pointer' }}/>
                <img src="../../../public/tracks/Rectangle 12.png" alt="Tracks" className="absolute bottom-[10.4%] left-[12%] w-[16%] h-[29%] max-[345px]:w-[35%] max-[345px]:h-auto max-sm:bottom-[5.4%] max-sm:left-[10%] max-sm:w-[30%] max-sm:h-[20%]"
            onClick={handleRectangleClick} style={{ cursor: 'pointer' }} />
            <img src="../../../public/tracks/Rectangle 13.png" alt="Tracks" className="absolute top-[22%] right-[41%] w-[16%] h-[29%] max-[345px]:w-[35%] max-[345px]:h-auto max-sm:top-[48%] max-sm:left-[10%] max-sm:w-[30%] max-sm:h-[20%]" 
            onClick={handleRectangleClick} style={{ cursor: 'pointer' }}/>
            <img src="../../../public/tracks/Rectangle 14.png" alt="Tracks" className="absolute bottom-[10.4%] right-[41%] w-[16%] h-[29%] max-[345px]:w-[35%] max-[345px]:h-auto max-sm:top-[48%] max-sm:right-[10%] max-sm:h-[20%] max-sm:w-[30%]" 
            onClick={handleRectangleClick} style={{ cursor: 'pointer' }}/>
            <img src="../../../public/tracks/Rectangle 15.png" alt="Tracks" className="absolute bottom-[10.4%] right-[12%] w-[16%] h-[29%] max-[345px]:w-[35%] max-[345px]:h-auto max-sm:bottom-[5.4%] max-sm:right-[10%] max-sm:w-[30%] max-sm:h-[20%]" 
            onClick={handleRectangleClick} style={{ cursor: 'pointer' }}/>
            <img src="../../../public/tracks/Rectangle 16.png" alt="Tracks" className="absolute top-[22%] right-[12%] w-[16%] h-[29%] max-[345px]:w-[35%] max-[345px]:h-auto max-sm:right-[10%] max-sm:w-[30%] max-sm:h-[20%]" 
            onClick={handleRectangleClick} style={{ cursor: 'pointer' }}/>
            <img src="../../../public/tracks/Vector 46.png" alt="Vector-46" className="absolute top-[53%] left-0 w-[30%] h-[2%] max-sm:top-[43.5%] max-sm:w-[25%] max-sm:h-auto" />
            <img src="../../../public/tracks/Vector 62.png" alt="Vector-62" className="absolute top-[55.25%] left-0 w-[30%] h-[1%] max-sm:top-[44.5%] max-sm:w-[25%] max-sm:h-auto" />
            <img src="../../../public/tracks/Vector 45.png" alt="Vector-45" className="absolute top-[56.5%] left-0 w-[30%] h-[3.5%] max-sm:top-[45.5%] max-sm:w-[25%] max-sm:h-auto" />
            <img src="../../../public/tracks/Vector 46.png" alt="Vector-46" className="absolute top-[56.5%] right-0 w-[30%] h-[3.5%] max-sm:top-[72%] max-sm:w-[25%] max-sm:h-auto" />
            <img src="../../../public/tracks/Vector 62.png" alt="Vector-62" className="absolute top-[55.25%] right-0 w-[30%] h-[1%] max-sm:top-[71%] max-sm:w-[25%] max-sm:h-auto" />
            <img src="../../../public/tracks/Vector 45.png" alt="Vector-45" className="absolute top-[53%] right-0 w-[30%] h-[2%]  max-sm:top-[69.5%] max-sm:w-[25%] max-sm:h-auto" />
            <img src="../../../public/tracks/Vector 63.png" alt="Vector" className="absolute top-[23%] left-[12.5%] w-[9%] h-[16%] max-[345px]:w-[25%] max-[345px]:h-[15%] max-sm:left-[13%] max-sm:top-[22.5%]" />
            <img src="../../../public/tracks/Vector 65.png" alt="Vector" className="absolute bottom-[11.5%] left-[12.5%] w-[9%] h-[16%] max-[345px]:w-[25%] max-[345px]:h-[15%] max-sm:bottom-[5.8%] max-sm:left-[11%]" />
            <img src="../../../public/tracks/Vector 64.png" alt="Vector" className="absolute bottom-[11.5%] right-[12.5%] w-[9%] h-[16%] max-[345px]:w-[25%] max-[345px]:h-[15%] max-sm:bottom-[5.8%] max-sm:right-[11%]" />
            <img src="../../../public/tracks/Vector 66.png" alt="Vector" className="absolute top-[23%] right-[12.5%] w-[9%] h-[16%] max-[345px]:w-[25%] max-[345px]:h-[15%] max-sm:top-[22.5%] max-sm:right-[11%]" />
            </div>
            {isDialogOpen && (
              <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg text-black">
            <p>Content to be added here.</p>
            <div className="mb-8" />
            <button
              onClick={() => setDialogOpen(false)}
              className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tracks;
