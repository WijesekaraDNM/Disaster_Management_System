import React from "react";

import { FaXmark, FaBars } from "react-icons/fa6";

export const MainMenuBar = ({ isMenuOpen, toggleMenu}) => {

    return(
      <div className="flex justify-center w-full">
        <div className="flex space-x-14 justify-center w-full items-center ">
          <ul className="md:flex space-x-16 first:font-medium hidden text-white    gap-[10px]    !text-[14px]  ![font-family:'Inter',Helvetica] w-full justify-between items-center  ">
                <li>
                    <a className="text-white transition hover:text-gray-500/75" href="#"> Home </a>
                </li>
                <li>
                    <a className="text-white transition hover:text-gray-500/75" href="/controller/status"> Disaster Status </a>
                </li>
                <li>
                    <a className="text-white transition hover:text-gray-500/75" href="#"> Requests </a>
                </li>
                <li>
                    <a className="text-white transition hover:text-gray-500/75" href="#"> Disaster Map </a>
                </li>
                <li>
                    <a className="text-white transition hover:text-gray-500/75" href="/controller/users"> User Control </a>
                </li>
          </ul>
        </div>

        {/* menu button for small devices-mobile */}

        <div className="flex md:hidden w-full items-end justify-end ">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none justify-end focus:test-gray-500  "
          >
            {isMenuOpen ? (
              <FaXmark className="h-6 w-6 " />
            ) : (
              <FaBars className="h-6 w-6 " />
            )}
          </button>
        </div>
      </div>
  )
}