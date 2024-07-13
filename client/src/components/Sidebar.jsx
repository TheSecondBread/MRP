import React, { useState } from "react";
import { GrOverview, GrHome, GrAdd } from "react-icons/gr";
import { AiOutlineMessage } from "react-icons/ai";

export default function Sidebar({ setActiveComponent }) {
  const [active, setActive] = useState("Home");

  const menuItems = [
    { name: "Home", icon: <GrHome /> },
    { name: "Send Message", icon: <AiOutlineMessage /> },
    { name: "My Products", icon: <GrOverview /> },
    { name: "Add new Product", icon: <GrAdd /> },
  ];

  const handleItemClick = (name) => {
    setActive(name);
    setActiveComponent(name);
  };

  return (
    <div className="bg-white border-r-2 w-[300px] p-5 h-[90vh]">
      {menuItems.map((item) => (
        <div
          key={item.name}
          className={`p-4 flex items-center gap-3 cursor-pointer ${
            active === item.name ? "text-blue-500" : "text-gray-700"
          }`}
          onClick={() => handleItemClick(item.name)}
        >
          <div className="text-[24px]">{item.icon}</div>
          <h1 className="text-[18px] font-bold">{item.name}</h1>
        </div>
      ))}
    </div>
  );
}
