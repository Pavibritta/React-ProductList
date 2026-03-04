import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <header className="fixed w-full bg-gray-950/80 backdrop-blur z-50">
        <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Shopping Cart
          </h1>
          <div className="flex justify-between items-center space-x-3">
            <ul className="hidden md:flex gap-8 text-gray-300 items-center">
              <li>
                <NavLink to="/home" className="hover:text-[#22d3ee]">
                  Home
                </NavLink>
              </li>
            </ul>
            <NavLink
              to="/login"
              className="bg-linear-to-r from-cyan-400 to-blue-500 px-3 py-2 rounded shadow text-white cursor-pointer hover:from-cyan-600 hover:to-blue-700"
              
            >
              Logout
            </NavLink>
          </div>
        </nav>
      </header>

      <Outlet />
    </>
  );
};

export default Navbar;
