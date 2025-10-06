import React from 'react';
import { Link } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import { FaInfoCircle, FaHome } from 'react-icons/fa';

export default function InfoPage() {
  return (

    <div className="relative w-screen min-h-screen bg-gray-900 text-white">
      <div className="p-5">
        
        <Link to="/home" className="text-red-500 text-sm mb-4 block flex items-center space-x-1">
          <FaHome className="w-4 h-4"/> <span>Back to Home</span>
        </Link>
        
        <div className="flex items-center space-x-3 mb-8">
            <FaInfoCircle className="w-8 h-8 text-yellow-500" />
            <h1 className="text-4xl font-bold">About QuickBite</h1>
        </div>

        <div className="space-y-6 text-gray-300">
            
            <p className="text-lg font-semibold text-white">
                Our Mission: Fast, Fresh, and Flavorful.
            </p>

            <p>
                QuickBite is dedicated to delivering the best local flavors right to your doorstep with unmatched speed. We partner with top local kitchens to ensure every meal—from spicy North Indian curries to authentic Arabian Mandi—is prepared fresh and delivered hot.
            </p>

            <div className="bg-gray-800 p-4 rounded-lg shadow-md space-y-2">
                <h3 className="text-xl font-bold text-red-400">Our Delivery Promise:</h3>
                <ul className="list-disc list-inside ml-4 text-sm space-y-1">
                    <li>All orders are dispatched within 5 minutes of preparation.</li>
                    <li>Guaranteed delivery within 30 minutes (for local zones).</li>
                    <li>Contactless delivery available.</li>
                </ul>
            </div>

            <p>
                For support, please use the contact details found on the Account page. Thank you for choosing QuickBite!
            </p>

        </div>
      </div>

      <div className="mt-20">
        <BottomNav />
      </div>
    </div>
  );
}