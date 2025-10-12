import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../context/ProductContext.jsx'; 
const FoodCard = ({ product }) => (
  <div className="bg-gray-700 rounded-xl shadow-xl overflow-hidden hover:shadow-red-500/50 transition duration-300">
    <img 
      src={product.image} 
      alt={product.foodName} 
      className="w-full h-40 object-cover" 
      onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Found'; }}
    />
    <div className="p-4">
      <h4 className="text-xl font-bold text-red-400 mb-1">{product.foodName}</h4>
      <p className="text-lg font-semibold text-green-400 mb-2">{product.foodPrice}</p>
      <p className="text-sm text-gray-300 line-clamp-2">{product.foodDescription}</p>
      <button className="mt-3 w-full py-1 bg-red-600 rounded text-white text-sm hover:bg-red-700">
        saved
      </button>
    </div>
  </div>
);

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { products } = useProducts(); 

  const handleLogout = () => {
    console.log("Admin Logged Out!");
    navigate("/admin/login"); 
  };
  
  const navigateToAddProduct = () => {
    navigate("/admin/products/add"); 
  }

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <div className="flex-1 flex flex-col overflow-auto">
        <header className="bg-gray-800 shadow p-4 sticky top-0 z-10">
           <h1 className="text-3xl font-semibold text-red-500">QuickBite Admin Panel</h1>
        </header>

        <main className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-gray-200">System Overview</h2>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-200">Quick Actions</h3>
            <div className="flex flex-wrap gap-4">
                <button 
                    className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-200 shadow-md"
                    onClick={navigateToAddProduct} 
                >
                    <i className="fas fa-plus-circle mr-2"></i> 
                    Add New Product ({products.length})
                </button>
                <button 
                    className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition duration-200 shadow-md"
                    onClick={handleLogout} 
                >
                    <i className="fas fa-sign-out-alt mr-2"></i> 
                    Logout
                </button>
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-6 text-gray-200 border-b border-gray-700 pb-2">
            Available Products ({products.length})
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <FoodCard key={product.id || product.foodName} product={product} />
            ))}
          </div>

        </main>
      </div>
    </div>
  );
}