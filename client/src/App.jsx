import React, { useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SendMessage from "./components/SendMessage";
import Sidebar from "./components/Sidebar";
import MyProduct from "./components/MyProduct"; 
import AddProduct from "./components/AddProduct";

export default function App() {
  const [activeComponent, setActiveComponent] = useState("Home");

  const renderComponent = () => {
    switch (activeComponent) {
      case "Home":
        return <Home />;
      case "Send Message":
        return <SendMessage />;
      case "My Products": 
        return <MyProduct />;
      case "Add new Product":
        return <AddProduct/>
      default:
        return <Home />;
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar setActiveComponent={setActiveComponent} />
        <div className="flex-1 p-5 bg-[#F6F6F9]">
          {renderComponent()}
        </div>
      </div>
    </>
  );
}
