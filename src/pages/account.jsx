import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext.jsx'; 
import { useTheme } from '../context/ThemeContext.jsx'; 
import BottomNav from '../components/BottomNav';
import { FaMoon, FaSun, FaUserCircle, FaEnvelope, FaPhone, FaInfoCircle, FaSignOutAlt } from 'react-icons/fa'; 
import { Link, useNavigate } from 'react-router-dom'; 

const CONTACT_EMAIL = "athulkrishnapjio@gmail.com";
const CONTACT_PHONE = "9778009265";
const CHAT_SUPPORT_URL = "https://page.botpenguin.com/68e0b5c465bb65210ffeadb9/68e0ad6c3661c40050691e38/agent";

export default function Account() {
    const { name, email, password, setName, setEmail, setPassword } = useContext(UserContext); 
    const { theme, toggleTheme } = useTheme();
    const themeButtonText = theme === 'dark' ? 'Switch to Light' : 'Switch to Dark';
    const ThemeIcon = theme === 'dark' ? FaSun : FaMoon;
    const navigate = useNavigate();

    const handleChatClick = () => {
        window.open(CHAT_SUPPORT_URL, '_blank');
    };

    const handleLogout = () => {
        if (setName) setName("");
        if (setEmail) setEmail("");
        if (setPassword) setPassword("");
        navigate('/'); 
    };

    return (
        <div className="relative w-screen min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
            <div className="p-5">
                <h1 className="text-4xl font-bold mb-8">My Account</h1>
            </div>

            <div className="px-5 space-y-6">
                <div className="space-y-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-4">
                        <FaUserCircle className="w-10 h-10 text-red-500 dark:text-red-400" />
                        <h2 className="text-2xl font-semibold capitalize">{name ? name : "Guest"}</h2>
                    </div>
                    <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Email Address:</p>
                        <p className="text-lg font-medium break-all">{email || 'Not Provided'}</p>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Password Status:</p>
                        <p className="text-lg font-medium">
                            {password ? '********' : 'Not Set'}
                        </p>
                    </div>
                </div>

                <button
                    onClick={toggleTheme}
                    className="w-full flex items-center justify-between p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200"
                >
                    <span className="text-lg font-medium">{themeButtonText}</span>
                    <ThemeIcon className="w-6 h-6 text-yellow-500 dark:text-yellow-300" />
                </button>
                <Link
                    to="/info" 
                    className="w-full flex items-center justify-between p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200"
                >
                    <span className="text-lg font-medium">About Us</span>
                    <FaInfoCircle className="w-6 h-6 text-blue-500 dark:text-blue-400" />
                </Link>

                <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center space-x-3 p-4 bg-red-600 text-white rounded-xl shadow-md hover:bg-red-700 transition duration-200"
                >
                    <FaSignOutAlt className="w-6 h-6" />
                    <span className="text-lg font-medium">Logout</span>
                </button>

                <div className="space-y-3 pt-2">
                    <h3 className="text-xl font-semibold">Support & Contact</h3>

                    <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="w-full flex items-center space-x-4 p-4 bg-red-600 text-white rounded-xl shadow-md hover:bg-red-700 transition duration-200"
                    >
                        <FaEnvelope className="w-6 h-6 flex-shrink-0" />
                        <div>
                            <span className="block font-medium">Email: {CONTACT_EMAIL}</span>
                        </div>
                    </a>

                    <a
                        href={`tel:${CONTACT_PHONE}`}
                        className="w-full flex items-center space-x-4 p-4 bg-red-600 text-white rounded-xl shadow-md hover:bg-red-700 transition duration-200"
                    >
                        <FaPhone className="w-6 h-6 flex-shrink-0" />
                        <div>
                            <span className="block font-medium">Phone: {CONTACT_PHONE}</span>
                        </div>
                    </a>
                    
                    <button
                        onClick={handleChatClick}
                        className="w-full flex items-center space-x-4 p-4 bg-gray-600 text-white rounded-xl shadow-md hover:bg-gray-700 transition duration-200"
                    >
                        <FaEnvelope className="w-6 h-6 flex-shrink-0" />
                        <span className="text-lg font-medium">Chat with AI Support</span>
                    </button>
                </div>

                <div className="mt-20">
                    <BottomNav />
                </div>
            </div>
            <br />
            <br />
            <br />
        </div>
    );
}