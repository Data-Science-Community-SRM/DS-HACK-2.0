import React from "react"

import Landing from "./components/Landing"
import About from "./components/About"
import Tracks from "./components/Tracks"
import Prizes from "./components/Prizes"
import FAQ from "./components/FAQ"
import Sponsors from "./components/Sponsors"
import Footer from "./components/Footer"
import Schedule from "./components/Schedule"

export default function App() {
  const navItems = [
    { label: "About", path: "#about" },
    { label: "Tracks", path: "#tracks" },
    { label: "Prizes", path: "#prizes" },
    { label: "Sponsors", path: "#sponsors" },
    { label: "Contact Us", path: "#contact" },
  ]

  React.useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://apply.devfolio.co/v2/sdk.js"
    script.async = true
    script.defer = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar absolute top-2 left-1/2 -translate-x-1/2 z-10 bg-secondary rounded-full max-w-3xl text-white heading">
          <div className="navbar-start">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
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
            <div className="flex w-full absolute justify-between px-10 sm:px-10 md:px-0 sm:absolute md:relative items-center ">
              <a href="/" className="btn btn-ghost">
                <img
                  src="DSHackLogo.png"
                  alt="DSC Logo"
                  className="w-12 h-12"
                />
              </a>
              <img
                src="/CTech.png"
                alt="DSC Logo"
                className="w-20 h-auto rounded-full hover:animate-spin transition duration-500 ease-in-out block sm:block md:hidden"
              />
              <img
                src="/SRM.png"
                alt="DSC Logo"
                className="w-20 sm:w-20 md:w-14 h-auto sm:h-auto md:h-auto rounded-full hover:animate-spin transition duration-500 ease-in-out"
              />
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.path}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="navbar-end hidden lg:flex">
            <img
              src="/CTech.png"
              alt="DSC Logo"
              className="w-12 h-auto rounded-full hover:animate-spin transition duration-500 ease-in-out hidden sm:hidden md:block"
            />
            <a
              href="https://dscommunity.in"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle btn-ghost"
            >
              <img
                src="/DSC.png"
                alt="DSC Logo"
                className="w-12 h-12 rounded-full hover:animate-spin transition duration-500 ease-in-out"
              />
            </a>
          </div>
        </div>
        {/* Page content here */}
        <Landing />
        <About />
        <Tracks />
        <Prizes />
        <Schedule />
        <FAQ />
        {/* <CheifGuest/> */}
        <Sponsors />
        <Footer />
      </div>
      <div className="drawer-side z-50">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 min-w-52 min-h-full bg-secondary heading">
          {/* Sidebar content here */}
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.path} className="py-6 text-white">
                {item.label}
              </a>
            </li>
          ))}
          <li className="mx-auto mt-4">
            <img src="/DSHackLogo.png" width={100} />
          </li>
        </ul>
      </div>
    </div>
  )
}
