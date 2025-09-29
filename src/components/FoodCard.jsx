import React from "react";
import { Link } from "react-router-dom";

export default function FoodCard({ image, name }) {
  return (
    <div className="flex flex-col items-center shadow-md rounded-xl p-4 w-100 bg-gray-800">
      <div className="w-40 h-40 square-full overflow-hidden mb-5 rounded-lg">
        <img src={image} alt={name} className=" w-full h-full object-cover" />
      </div>
      <h3 className="text-center text-white-800 font-semibold mb-5">{name}</h3>
      <Link
          to="/Home"
          className="px-6 py-2 mb-3 rounded-lg font-semibold 
                     bg-gradient-to-r from-gray-600 via-gray-800 to-gray-600 
                     text-white shadow-md 
                     hover:from-gray-800 hover:via-gray-600 hover:to-gray-800 
                     hover:shadow-lg hover:scale-105 
                     transition-all duration-300 ease-in-out"
        >
            Price $10
        </Link>
        <Link
          to="/Home"
          className="px-6 py-2 mb-3 rounded-lg font-semibold 
                     bg-gradient-to-r from-gray-600 via-gray-800 to-gray-600 
                     text-white shadow-md 
                     hover:from-gray-800 hover:via-gray-600 hover:to-gray-800 
                     hover:shadow-lg hover:scale-105 
                     transition-all duration-300 ease-in-out"
        >
            Add to Cart
        </Link>
    </div>
  );
}