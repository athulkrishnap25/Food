import React from "react";
import { useSelector, useDispatch } from 'react-redux'; 
import { Link, useNavigate } from "react-router-dom";
import BottomNav from "../components/BottomNav";
import { FaTrashAlt } from 'react-icons/fa';
import { addToCart, removeFromCart, clearCart } from '../redux/cartSlice'; 
import { placeOrder } from '../redux/ordersSlice'; 


export default function Cart() {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  
  const totalPrice = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.foodPrice.replace("₹", ""));
    return sum + price * item.quantity;
  }, 0);

  const handleRemove = (foodName) => {
    dispatch(removeFromCart(foodName)); 
  };

  const handleAdd = (item) => {
    dispatch(addToCart(item));
  };
  
  const handleCheckout = () => {
    if (cartItems.length === 0) return;

    const orderPayload = {
      items: cartItems,
      totalPrice: totalPrice.toFixed(2),
    };
    dispatch(placeOrder(orderPayload));
    dispatch(clearCart());

    navigate('/orders'); 
  };
  
  const handleClearCart = () => {
    if (window.confirm("Are you sure you want to clear your entire cart?")) {
        dispatch(clearCart());
    }
  };


  return (
    <div className="relative min-h-screen bg-gradient-to-r from-gray-900 to-black text-white">
      <div className="p-5">
        <Link to="/home" className="text-red-500 text-sm mb-4 block">
          ← Back to Home
        </Link>
        
        <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold mb-0">Your Cart</h1>
            
            {cartItems.length > 0 && (
                <button
                    onClick={handleClearCart}
                    className="p-2 text-sm text-gray-400 hover:text-red-500 transition-colors flex items-center space-x-1"
                >
                    <FaTrashAlt className="w-4 h-4" />
                    <span>Clear Cart</span>
                </button>
            )}
        </div>
        <div className="mb-8"></div> 
      </div>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-400 text-xl mt-20">
          Your cart is empty! 
        </p>
      ) : (
        <div className="px-5">
          {cartItems.map((item, index) => (
            <div
              key={item.foodName}
              className="flex items-center bg-gray-800 p-4 rounded-lg mb-4 shadow-lg"
            >
              <img
                src={item.image}
                alt={item.foodName}
                className="w-16 h-16 object-cover rounded-md mr-4"
              />
              <div className="flex-grow">
                <h3 className="text-lg font-semibold">{item.foodName}</h3>
                <p className="text-red-400 font-bold">
                  {item.foodPrice} x {item.quantity}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleRemove(item.foodName)} 
                  className="bg-red-600 text-white w-7 h-7 rounded-full text-xl leading-none flex items-center justify-center pb-1"
                >
                  -
                </button>
                <span className="text-white text-lg">{item.quantity}</span>
                <button
                  onClick={() => handleAdd(item)} 
                  className="bg-green-600 text-white w-7 h-7 rounded-full text-xl leading-none flex items-center justify-center pb-1"
                >
                  +
                </button>
              </div>
            </div>
          ))}
          <div className="mt-8 pt-4 border-t border-gray-700">
            <div className="flex justify-between text-2xl font-bold mb-4">
              <span>Total:</span>
              <span>₹{totalPrice.toFixed(2)}</span>
            </div>
            <button 
              onClick={handleCheckout} 
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl text-xl font-bold transition duration-200"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}

      <div className="mt-20">
        <BottomNav />
      </div>
    </div>
  );
}