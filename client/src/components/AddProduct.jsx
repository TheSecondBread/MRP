import React, { useState } from "react";

export default function AddProduct({ addProduct }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [unit, setUnit] = useState("Each");
  const [image, setImage] = useState("");
  const [unitsLeft, setUnitsLeft] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      title,
      price: `${price}RS`,
      unit,
      image,
      unitsLeft: parseInt(unitsLeft, 10),
    };
    addProduct(newProduct);
    setTitle("");
    setPrice("");
    setUnit("Each");
    setImage("");
    setUnitsLeft("");
  };

  return (
    <div className="min-h-screen bg-[#F6F6F9] p-4 md:p-8 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-4 md:p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-lg md:text-xl font-semibold mb-4">Add New Product</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
            Price
          </label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="unit">
            Unit
          </label>
          <input
            type="text"
            id="unit"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
            Image URL
          </label>
          <input
            type="text"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="unitsLeft">
            Units Left
          </label>
          <input
            type="number"
            id="unitsLeft"
            value={unitsLeft}
            onChange={(e) => setUnitsLeft(e.target.value)}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none w-full"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
