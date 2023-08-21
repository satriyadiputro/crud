import React from "react";

const Bread = () => {
  return (
    <div className="flex items-center">
      <div className="flex items-center overflow-y-auto whitespace-nowrap">
        <a href="#" className="text-black hover:underline"> Aingstudios.com </a>

        <span className="mx-5 text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </span>

        <a href="#" className="text-black hover:underline"> Category 1 </a>

        <span className="mx-5 text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </span>

        <a href="#" className="text-indigo-500 hover:underline"> Sub Category1 </a>
      </div>
    </div>
  );
};

export default Bread;
