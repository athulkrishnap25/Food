import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function AdminLogin() {
  const [formData, setFormData] = useState({
    username: '',
    adminPassword: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(''); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.username.trim() && formData.adminPassword.trim()) {
      console.log("Admin Login Successful (Test Mode)!");
      navigate("/admin/dashboard"); 
    } else {
      setError('Username and Password cannot be empty.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-900 to-black text-white p-4">
      
      <div className="bg-gray-800 p-8 rounded-lg shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-red-500">
          Admin Login 
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-300" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-lg focus:ring-red-500 focus:border-red-500 placeholder-gray-400"
              placeholder="Enter anything here"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-300" htmlFor="adminPassword">
              Password
            </label>
            <input
              type="password"
              id="adminPassword"
              name="adminPassword"
              value={formData.adminPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-lg focus:ring-red-500 focus:border-red-500 placeholder-gray-400"
              placeholder="Enter anything here"
              required
            />
          </div>
          
          {error && (
            <p className="text-sm text-red-400 text-center p-2 bg-red-900 rounded">{error}</p>
          )}

          <button
            type="submit"
            className="w-full py-2 rounded-lg font-semibold bg-red-600 text-white shadow-md hover:bg-red-700 transition duration-300"
          >
            Log In
          </button>
        </form>
        
        <div className="mt-4 text-center">
            <Link
                to="/"
                className="text-sm text-blue-400 hover:text-red-400 transition-colors"
            >
                ← Back to User Registration
            </Link>
        </div>
      </div>
    </div>
  );
}