import Landing from "./components/Landing"
import About from "./components/About"
import Tracks from "./components/Tracks"
import Prizes from "./components/prizes/Prizes"
import FAQ from "./components/FAQ"
import Cheif from "./components/cheifGuest/Cheif"
import Sponsors from "./components/sponsors/Sponsors"
import Footer from "./components/footer/Footer"
import Schedule from "./components/Schedule"

export default function App() {

  const navItems = [
    { label: 'About', path: '#about' },
    { label: 'Tracks', path: '#tracks' },
    { label: 'Prizes', path: '#prizes' },
    { label: 'Sponsors', path: '#sponsors' },
    { label: 'Contact Us', path: '#contact' },
  ];

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar absolute top-2 left-1/2 -translate-x-1/2 z-10 bg-secondary rounded-full max-w-3xl text-white">
          <div className="navbar-start">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </label>
            </div> 
            <a href="/" className="btn btn-ghost text-xl"><img src="DSHackLogo.png" alt="DSC Logo" className="w-12 h-12"/></a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {navItems.map((item, index) => <li key={index}><a href={item.path}>{item.label}</a></li> )} 
            </ul>
          </div>
          <div className="navbar-end hidden lg:flex">
            <img src="/DSC.png" alt="DSC Logo" className="w-12 h-12 rounded-full"/>
          </div>
        </div>
        {/* Page content here */}
        <Landing/>
        <About/>
        <Tracks/>
        <Prizes/>
        <Schedule/>
        <FAQ/>
        {/* <Cheif/> */}
        <Sponsors/>
        <Footer/>
      </div> 
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}
          {navItems.map((item, index) => <li key={index}><a href={item.path}>{item.label}</a></li> )} 
        </ul>
      </div>
    </div>
  )
}