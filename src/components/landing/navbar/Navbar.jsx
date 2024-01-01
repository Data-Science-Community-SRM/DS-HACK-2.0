import React ,{useState} from 'react';


const Navbar = () => {
    console.log("navbar");
  // array of objects for nav items
  const navItems = [
    { id: 1, label: 'Home', path: '/' },
    { id: 2, label: 'About', path: '#about' },
    { id: 3, label: 'Tracks', path: '#tracks' },
    { id: 4, label: 'Prizes', path: '#prizes' },
    { id: 5, label: 'Sponsors', path: '#sponsors' },
    { id: 6, label: 'Contact Us', path: '#contact' },
  ];

  // const [drawerChecked, setDrawerChecked] = useState(false);

  const handleHomeClick = (event) => {
  event.preventDefault();
 
  // console.log('Home clicked');
  
  // Scroll to the top of the page
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

  return (
    <div className="drawer z-50">
    <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex flex-col mx-2">
      {/* Navbar */}
      <div  className=" w-full sm:max-w-[40rem] md:min-w-[40rem] md:w-[70%] lg:w-[80%]  lg:max-w-[46rem]  flex  justify-between   lg:justify-center  mx-auto bg-[#660066] rounded-2xl ">
        <div className="flex-none sm:hidden md:hidden lg:hidden">
          <label
            htmlFor="my-drawer-3"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block text-white w-7 h-7 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        {/* dsclogo div */}
        <div className="flex justify-center items-center px-2 mr-0 md:mr-5 lg:mr-6 ">
          <a href="/" className="  flex  justify-center items-center">
            <img src="/images/dsclogo1.svg" alt="" className="h-7 w-7" />
          </a>
        </div>
        {/* nav div*/}
        <div className="flex-none hidden sm:flex  md:mr-6 md:block lg:block">
          <ul className="  menu menu-horizontal flex md:justify-end justify-center items-center space-x-0 text-[#efbbff] font-bold  text-center  text-base  lg:text-xl">
            {/* Navbar menu content here */}
            {navItems.map((item) => (
               <li key={item.id} className="hover:text-white">
               {/* Use onClick to handle the click event */}
               <a href={item.path} onClick={item.label === 'Home' ? handleHomeClick : undefined}>
                 {item.label}
               </a>
             </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Page content here */}
    </div>
    <div className="drawer-side">
      <label
        htmlFor="my-drawer-3"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="pt-[1.5rem] menu p-4 w-60 min-h-full ext-[#efbbff] font-bold  text-center text-lg lg:text-xl gap-2 text-[#ce73ea] bg-fuchsia-300">
        {/* Sidebar content here */}
        {navItems.map((item) => (
          <li key={item.id} className="text-[#660066] rounded-xl  hover:text-white">
            
            <a href={item.path} onClick={item.label === 'Home' ? handleHomeClick : undefined}>
                {item.label}
              </a>
          </li>
        ))}
         <div className=''>
        <img
          src="/images/drawer1.svg"
          alt=""
          className=" mt-8 h-30 w-30 mx-auto my-4"
        />
      </div>
      </ul>
     
    </div>
  </div>
  );
};

export default Navbar;
