import React from 'react';

export default function Navbar() {
  return (
    <div className="bg-white text-black border-b-2 p-1 pl-10 pr-10 flex items-center justify-between">
      {/* <h1 className="font-serif text-[30px]">MRP</h1> */}
      <img src='download.png' className='h-[60px]'></img>
      <nav className="flex items-center space-x-4">
        <div className="relative group">
          <button className="flex items-center space-x-2 focus:outline-none">
            <span>seller1@gmail.com</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-20 opacity-0 group-hover:opacity-100 transition-opacity">
            <a href="#" className="block px-4 py-2">Logout</a>
          </div>
        </div>
      </nav>
    </div>
  );
}
