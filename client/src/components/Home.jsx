import React, { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Today");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Hardcoded data for different times
  const data = {
    Today: {
      orders: 45,
      delivered: 0,
      sales: "1500Rs",
      profits: "1200Rs",
    },
    "Last 7 days": {
      orders: 250,
      delivered: 220,
      sales: "12000Rs",
      profits: "8000Rs",
    },
    "All time": {
      orders: 1500,
      delivered: 1300,
      sales: "80000Rs",
      profits: "50000Rs",
    },
  };

  return (
    <div className="bg-[#F6F6F9] w-full h-full flex justify-center">
      <div className="flex flex-col items-center w-full">
        <div className="w-full max-w-[1200px] bg-white mt-10">
          <div className="border-b-2 p-4 flex items-center justify-between">
            <h1 className="text-[20px] font-bold">Overview</h1>
            <nav className="hidden md:flex md:flex-grow md:justify-center font-bold">
              <a
                className={`cursor-pointer mx-4 ${
                  activeTab === "Today" ? "text-pink-500" : "text-gray-500"
                }`}
                onClick={() => handleTabClick("Today")}
              >
                Today
              </a>
              <a
                className={`cursor-pointer mx-4 ${
                  activeTab === "Last 7 days"
                    ? "text-pink-500"
                    : "text-gray-500"
                }`}
                onClick={() => handleTabClick("Last 7 days")}
              >
                Last 7 days
              </a>
              <a
                className={`cursor-pointer mx-4 ${
                  activeTab === "All time" ? "text-pink-500" : "text-gray-500"
                }`}
                onClick={() => handleTabClick("All time")}
              >
                All time
              </a>
            </nav>
          </div>
          <div className="flex justify-around p-4 mt-7 gap-4 md:gap-20 flex-wrap">
            <div className="text-center">
              <h1 className="font-extrabold text-[40px] mb-3 text-blue-700">
                {data[activeTab].orders}
              </h1>
              <div className="font-extralight text-[20px]">Total ordered</div>
            </div>
            <div className="text-center">
              <h1 className="font-extrabold text-[40px] mb-3 text-blue-700">
                {data[activeTab].delivered}
              </h1>
              <div className="font-extralight text-[20px]">
                Products Delivered
              </div>
            </div>
            <div className="text-center">
              <h1 className="font-extrabold text-[40px] mb-3 text-blue-700">
                {data[activeTab].sales}
              </h1>
              <div className="font-extralight text-[20px]">Total Sales</div>
            </div>
            <div className="text-center">
              <h1 className="font-extrabold text-[40px] mb-3 text-blue-700">
                {data[activeTab].profits}
              </h1>
              <div className="font-extralight text-[20px]">Total Profits</div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[1200px] bg-white mt-10">
          <div className="border-b-2 p-4 flex items-center">
            <h1 className="text-[20px] font-bold">Products</h1>
          </div>
          <div className="p-4">
            <div className="flex flex-col gap-2">
              {["Shirt", "Pant", "Watch"].map((product, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-2 bg-gray-100 mb-2"
                >
                  <div>
                    <span className="text-lg font-semibold">{product}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500 mr-4">
                      Ordered: {data[activeTab].orders}
                    </span>
                    <span className="text-sm text-gray-500">
                      Units Left: {data[activeTab].delivered}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
