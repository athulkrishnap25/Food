import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext.jsx";
import chef from "../assets/welcomepage.png";

export default function Instruction1() {
  const { setUserData } = useContext(UserContext); 
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    }
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email.';
    }
    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (validate()) {
   
      setUserData(formData); 
      navigate("/instruction/2");
    }
  };

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center h-screen bg-gradient-to-r from-gray-900 to-black text-white px-4">
      <div className="flex flex-col items-center justify-center z-10 md:mr-20 mb-8 md:mb-0">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">
          Welcome to QuickBite
        </h1>
        <p className="mb-4 text-lg text-center md:text-left">
          Enter your details to get started:
        </p>
        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center space-y-3">
          
          <div className="w-64 md:w-72">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-full text-black bg-gray-50"
            />
            {errors.name && <p className="text-sm text-yellow-400 mt-1">{errors.name}</p>}
          </div>

          <div className="w-64 md:w-72">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-full text-black bg-gray-50"
            />
            {errors.email && <p className="text-sm text-yellow-400 mt-1">{errors.email}</p>}
          </div>

          <div className="w-64 md:w-72">
            <input
              type="password"
              name="password"
              placeholder="Password (min 6 characters)"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-full text-black bg-gray-50"
            />
            {errors.password && <p className="text-sm text-yellow-400 mt-1">{errors.password}</p>}
          </div>

          <button
            type="submit" 
            className="w-64 md:w-72 px-4 py-2 rounded-full font-semibold bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out mt-4"
          >
            Next →
          </button>
        </form>
      </div>
      <img src={chef} alt="Chef" className="w-72 md:w-96 h-auto" />
    </div>
  );
}