import React, { useState } from "react";

export default function MyProduct() {
  const initialProducts = [
    {
      title: "Men's Casual Shirt",
      price: "500RS",
      unit: "Each",
      image: "shirt.webp",
      unitsLeft: 10,
    },
    {
      title: "Women's Jeans",
      price: "750RS",
      unit: "Each",
      image: "jeans.jpg",
      unitsLeft: 15,
    },
    {
      title: "Men's Pants",
      price: "600RS",
      unit: "Each",
      image: "pants.jpg",
      unitsLeft: 8,
    },
    {
      title: "Unisex Digital Watch",
      price: "1200RS",
      unit: "Each",
      image: "watch.jpg",
      unitsLeft: 5,
    },
  ];

  const [products, setProducts] = useState(initialProducts);

  const updatePrice = (index, newPrice) => {
    const updatedProducts = [...products];
    updatedProducts[index].price = newPrice;
    setProducts(updatedProducts);
  };

  const addStock = (index, additionalStock) => {
    const updatedProducts = [...products];
    updatedProducts[index].unitsLeft += additionalStock;
    setProducts(updatedProducts);
  };

  const ProductCard = ({ product, index }) => {
    const [newPrice, setNewPrice] = useState(product.price);
    const [additionalStock, setAdditionalStock] = useState(0);

    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover mb-4 rounded-lg"
        />
        <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
        <p className="text-xl font-bold">{product.price}</p>
        <p className="text-sm text-gray-500">{product.unit}</p>
        <p className="text-sm text-gray-500">Units left: {product.unitsLeft}</p>
        <div className="mt-4">
          <input
            type="text"
            value={newPrice}
            onChange={(e) => setNewPrice(e.target.value)}
            className="border p-1 mb-2 w-full"
            placeholder="New Price"
          />
          <button
            onClick={() => updatePrice(index, newPrice)}
            className="bg-blue-500 text-white py-1 px-4 rounded mb-4 w-full"
          >
            Change Price
          </button>
          <input
            type="number"
            value={additionalStock}
            onChange={(e) => setAdditionalStock(Number(e.target.value))}
            className="border p-1 mb-2 w-full"
            placeholder="Additional Stock"
          />
          <button
            onClick={() => addStock(index, additionalStock)}
            className="bg-green-500 text-white py-1 px-4 rounded w-full"
          >
            Add Stock
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#F6F6F9] p-4 md:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} index={index} />
        ))}
      </div>
    </div>
  );
}
