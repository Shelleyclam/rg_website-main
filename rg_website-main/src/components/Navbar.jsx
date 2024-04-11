import { useState } from "react";
import  {Link}  from "react-router-dom";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      {/* <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" /> */}
      <p className={`font-poppins font-normal w-[124px] h-[34px] text-white`}>EV CHAIN</p>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >

            {/* {index === navLinks.length - 2 ? <button class="bg-transparent hover:bg-cyan-500  rounded-full text-cyan-300 font-semibold hover:text-white py-2 px-4 border border-cyan-300 hover:border-transparent">
              {nav.title}
            </button> :
              index === navLinks.length - 1 ?
                <button class="bg-cyan-300 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-full">
                  {nav.title} </button> :
                  <Link to={`/${nav.id}`}>{nav.title}</Link>
                
            } */}

            {
              index === navLinks.length - 1 ?
              <Link to={`/${nav.id}`}>
                <button class="bg-cyan-300 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-full">
                  {nav.title} </button></Link> :
                  <Link to={`/${nav.id}`}>{nav.title}</Link>
            }

            {/* <a href={`#${nav.id}`}>{nav.title}</a> */}

          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${!toggle ? "hidden" : "flex"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                {/* {index === navLinks.length - 2 ? <button class="bg-transparent hover:bg-blue-500  rounded-full text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent">
                  {nav.title}
                </button> :
                  index === navLinks.length - 1 ?
                    <button class="bg-cyan-300 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-full">
                      {nav.title} </button> :
                    <a href={`#${nav.id}`}>{nav.title}</a>} */}
                    {index === navLinks.length - 1 ?
                    <button class="bg-cyan-300 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-full">
                      {nav.title} </button> :
                    <a href={`#${nav.id}`}>{nav.title}</a>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
