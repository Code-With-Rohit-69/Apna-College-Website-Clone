import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import ResponsiveNavbar from './ResponsiveNavbar.jsx'

export default function Navbar({ toggleLogin, toggleSignUp }) {
  const [showSideBar, setShowSideBar] = useState(false);

  function clickHandler() {
    setShowSideBar(!showSideBar);
  }

  function closeNavbar() {
    setShowSideBar(false);
  }

  return (
    <>
      <nav className="nav fixed top-0 flex items-center w-full py-[1rem] px-[5rem] shadow-md justify-between z-[1] bg-white font-sans">
        <div className="left">
          <img
            src="./src/assets/logo.png"
            alt="Logo"
            className="h-full w-[6rem]"
          />
        </div>
        <div className="right flex items-center gap-[1.8rem]">
          <button className="bg-[#6674CC] text-white px-[1rem] font-semibold text-[1.1rem] tracking-tight rounded-md py-[.4rem]">
            New Sigma Feb'24
          </button>
          {["Home", "New Courses", "Log in", "Sign Up"].map((item, index) => (
            <a
              href="#"
              className={`font-medium text-base tracking-[.1px] ${
                index === 3
                  ? "border-[3px] border-[#6674CC] border-solid rounded-md px-[1rem] py-[.3rem] text-[#6674cc]"
                  : ""
              }`}
              key={index}
              onClick={
                index === 2 ? toggleLogin : index === 3 ? toggleSignUp : null
              }
            >
              {item}
            </a>
          ))}
          <FaBars
            className="bar text-[2rem] text-[#a1a1a1] hidden"
            onClick={clickHandler}
          />
        </div>
      </nav>
      {showSideBar && <ResponsiveNavbar showSideBar={showSideBar} closeNavbar={closeNavbar} toggleLogin={toggleLogin} toggleSignUp={toggleSignUp}/>}
    </>
  );
}