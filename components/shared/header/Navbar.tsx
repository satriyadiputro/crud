"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Brand from "./brand";
import ExampleComponent from "./ExampleComponent";
import DropdownMin from "./DropdownMin";

import { useState } from "react";

const NavMenu = [
  {
    href: "#",
    label: "Category 1",
    dropdownItems: [
      {
        label: "Category 1",
        href: "/",
        excerpt:
          "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, Praesent aliquet venenatis dignissim. consectetur adipiscing elit.",
      },
      {
        label: "Category 2",
        href: "/",
        excerpt:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet venenatis dignissim.",
      },
      {
        label: "Category 3",
        href: "/",
        excerpt: "Nulla ac enim ut libero hendrerit laoreet.",
      },
      {
        label: "Category 1",
        href: "/",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        label: "Category 2",
        href: "/",
        excerpt: "Praesent aliquet venenatis dignissim.",
      },
      {
        label: "Category 3",
        href: "/",
        excerpt: "Nulla ac enim ut libero hendrerit laoreet.",
      },
    ],
  },
  {
    href: "#",
    label: "Category 2",
    dropdownItems: [
      {
        label: "Category 1",
        href: "/",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        label: "Category 2",
        href: "/",
        excerpt: "Praesent aliquet venenatis dignissim.",
      },
      {
        label: "Category 3",
        href: "/",
        excerpt: "Nulla ac enim ut libero hendrerit laoreet.",
      },
      {
        label: "Category 1",
        href: "/",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        label: "Category 2",
        href: "/",
        excerpt: "Praesent aliquet venenatis dignissim.",
      },
    ],
  },
  {
    href: "#",
    label: "About",
  },
  {
    href: "#",
    label: "Legal",
  },
];

const brandData = {
  first: "Vanjohn",
  last: "News",
};

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sm:hidden">
      <button
        className="block text-gray-500 focus:text-white focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="absolute bg-slate-600 top-[80px] rounded-lg right-0 w-full">
          <ul>
            {NavMenu.map((item, index) => (
              <li
                key={index}
                className="px-5 py-2 border-b border-slate-700 hover:scale-105 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <Link
                  href={item.href}
                  className="block text-white font-size-sm font-semibold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  return (
    <nav
      className="w-full h-20 shadow-xl border-b-4 border-red-400"
      style={{ backgroundColor: "#e89a69" }}
    >
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between h-full px-2 w-full">
        <Brand data={brandData} />

        <div className="hidden sm:flex ml-auto">
          <ul className="gap-6 hidden sm:flex">
            {NavMenu.map((item, index) => (
              <li key={index} className="text-white relative group">
                <Link href={item.href} className="font-semibold">
                  {item.label}
                </Link>

                {item.dropdownItems && item.dropdownItems.length > 0 && (
                  <div className="absolute hidden top-full right-[-50px] w-[400px] z-10 group-hover:block">
                    <div
                      id="mega-menu-full-dropdown"
                      className="mt-1 bg-white border-gray-200 shadow-sm border-y rounded-lg dark:bg-gray-800 dark:border-gray-600"
                    >
                      <div className="grid max-w-screen-2xl px-4 py-5 mx-auto text-gray-900 dark:text-white">
                        <ul className="grid">
                          {item.dropdownItems.map(
                            (dropdownItem, dropdownIndex) => (
                              <li key={dropdownIndex} className="mb-2">
                                <a
                                  href="#"
                                  className="block transition duration-300 ease-in-out transform hover:scale-105 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                                >
                                  <div className="font-semibold text-base">
                                    {dropdownItem.label}
                                  </div>
                                  <p className="text-xs text-gray-500 dark:text-gray-400">
                                    {dropdownItem.excerpt}
                                  </p>
                                </a>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        <MobileMenu />
      </div>
    </nav>
  );
};

export default Navbar;
