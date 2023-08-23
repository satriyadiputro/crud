import React from "react";
import { RiSearchLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="container mx-auto max-w-screen-4xl border-b-4 border-secondary">
      <nav className="bg-primary text-white flex items-center justify-between">
        <div className="lg:hidden py-4 ml-6">
            <a className="text-4xl font-extrabold text-uppercase text-white">
                Aing<span className="text-secondary font-medium">News</span>
            </a>
        </div>
        
        <button
          className="border border-gray-500 p-2 w-16 h-12 lg:hidden flex items-center justify-center mr-6"
          type="button"
        >
          <svg
            className="text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="{2}"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        <ul className="hidden lg:flex items-center">
          <li className="hover:bg-secondary py-4">
            <a href="index.html" className="px-4 text-white">
              Home
            </a>
          </li>
          <li className="hover:bg-secondary py-4">
            <a href="category.html" className="px-4 text-white">
              Category
            </a>
          </li>
          <li className="hover:bg-secondary py-4">
            <a href="single.html" className="px-4 text-white">
              Single News
            </a>
          </li>
          <li className="relative group inline-block hover:bg-secondary py-4">
            <a href="#" className="px-4 text-white">
              Dropdown
            </a>
            <ul className="absolute z-10 hidden bg-white text-black pl-2 group-hover:block mt-2">
              <li className="py-2">
                <a href="#" className="pl-2">
                  Menu item 1
                </a>
              </li>
              <li className="py-2">
                <a href="#" className="pl-2">
                  Menu item 2
                </a>
              </li>
              <li className="py-2">
                <a href="#" className="pl-2">
                  Menu item 3
                </a>
              </li>
            </ul>
          </li>
          <li className="hover:bg-secondary py-4">
            <a href="contact.html" className="px-4 text-white">
              Contact
            </a>
          </li>
        </ul>
        <div className="hidden lg:flex items-center">
          <form action="/search">
            <div className="flex items-center">
              <input type="text" className="text-black border border-white outline-secondary px-3 rounded-md mr-3 py-2" placeholder="Keyword" name="keyword" />
              <button type="submit" className="bg-primary text-dark px-2 rounded-md font-2xl" >
                <RiSearchLine size={28} />
              </button>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;