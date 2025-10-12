import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../context/ProductContext.jsx'; 
export default function AddProductForm() {
  const navigate = useNavigate();
  const { addProduct } = useProducts(); 

  const [productData, setProductData] = useState({
    foodName: '',     
    foodPrice: '',    
    foodDescription: '', 
    image: '',        
  });

  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(productData); 

    alert(`Product "${productData.foodName}" successfully added!`);
    navigate('/admin/dashboard'); 
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      <div className="max-w-3xl mx-auto bg-gray-700 p-8 rounded-xl shadow-2xl">
        <h2 className="text-3xl font-bold mb-6 text-red-700">
          Add New Product 
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div>
            <label className="block text-sm font-medium mb-1 text-white" htmlFor="foodName">
              Product Name
            </label>
            <input
              type="text"
              id="foodName"
              name="foodName" 
              value={productData.foodName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 text-white"
              placeholder="e.g., QuickBite Classic Burger"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-white" htmlFor="foodPrice">
              Price (e.g., ₹299.00)
            </label>
            <input
              type="text" 
              id="foodPrice"
              name="foodPrice" 
              value={productData.foodPrice}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 text-white"
              placeholder="e.g., ₹299.00"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1 text-white" htmlFor="image">
              Image URL
            </label>
            <input
              type="url"
              id="image"
              name="image" 
              value={productData.image}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 text-white"
              placeholder="e.g., https://example.com/food.jpg"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-white" htmlFor="foodDescription">
              Description
            </label>
            <textarea
              id="foodDescription"
              name="foodDescription" 
              value={productData.foodDescription}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 text-white"
              placeholder="Describe the product..."
              required
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
                type="button"
                onClick={() => navigate('/admin/dashboard')}
                className="px-6 py-2 border border-gray-300 rounded-lg text-white hover:bg-gray-100 transition duration-200"
            >
                Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 rounded-lg font-semibold bg-red-600 text-white shadow-md hover:bg-red-700 transition duration-300"
            >
              Save Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}