import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaClock, FaBox } from 'react-icons/fa';
import BottomNav from '../components/BottomNav';

export default function Orders() {
    const orderHistory = useSelector(state => state.orders.history);
    const latestOrder = orderHistory[0];

    return (
        <div className="relative min-h-screen bg-gradient-to-r from-gray-900 to-black text-white">
            <div className="p-5">
                <Link to="/home" className="text-red-500 text-sm mb-4 block">
                    ← Back to Home
                </Link>
                <h1 className="text-4xl font-bold mb-8">My Orders</h1>
            </div>

            {orderHistory.length === 0 ? (
                <p className="text-center text-gray-400 text-xl mt-20">
                    You haven't placed any orders yet.
                </p>
            ) : (
                <div className="px-5">
                    {latestOrder && (
                        <div className="bg-green-800 bg-opacity-30 border border-green-700 p-6 rounded-xl mb-8 shadow-2xl">
                            <div className="flex items-center space-x-3 mb-4">
                                <FaCheckCircle className="w-8 h-8 text-green-400" />
                                <h2 className="text-2xl font-bold text-green-400">Order Successful!</h2>
                            </div>
                            <p className="text-lg mb-2">
                                Your order #{latestOrder.id} has been placed.
                            </p>
                            <p className="flex items-center space-x-2 text-xl font-bold text-yellow-300">
                                <FaClock className="w-5 h-5" />
                                Estimated Delivery: {latestOrder.deliveryEstimate}
                            </p>
                            <p className="mt-4 text-sm text-gray-300">
                                Total Paid: ₹{latestOrder.totalPrice}
                            </p>
                        </div>
                    )}

                    <h2 className="text-2xl font-bold mb-4 border-b border-gray-700 pb-2">Order History</h2>
                    
                    {orderHistory.map((order, index) => (
                        <div key={order.id} className="bg-gray-800 p-4 rounded-lg mb-4 shadow-lg">
                            <div className="flex justify-between items-center mb-2">
                                <span className="font-bold flex items-center space-x-2">
                                    <FaBox className="w-4 h-4" /> Order #{order.id}
                                </span>
                                <span className="text-sm text-gray-400">{order.date}</span>
                            </div>
                            <p className="text-lg font-semibold text-red-400">
                                Total: ₹{order.totalPrice}
                            </p>
                            <p className="text-sm">Items: {order.items.length}</p>
                        </div>
                    ))}
                </div>
            )}
            
            <div className="mt-20">
                <BottomNav />
            </div>
        </div>
    );
}