import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext.jsx'; 
import { useTheme } from '../context/ThemeContext.jsx'; 
import BottomNav from '../components/BottomNav';
import { FaMoon, FaSun, FaUserCircle, FaEnvelope } from 'react-icons/fa';

const CONTACT_FORM_URL = "contact link";

export default function Account() {
    const { name } = useContext(UserContext);
    const { theme, toggleTheme } = useTheme();
    const themeButtonText = theme === 'dark' ? 'Switch to Light' : 'Switch to Dark';
    const ThemeIcon = theme === 'dark' ? FaSun : FaMoon;

    const handleContactClick = () => {
        window.open(CONTACT_FORM_URL, '_blank');
    };

    return (
        <div className="relative w-screen min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
            <div className="p-5">
                <h1 className="text-4xl font-bold mb-8">My Account</h1>
            </div>

            <div className="px-5 space-y-6">

                <div className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                    <FaUserCircle className="w-10 h-10 text-red-500 dark:text-red-400" />
                    <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Signed in as:</p>
                        <h2 className="text-2xl font-semibold capitalize">{name ? name : "Guest"}</h2>
                    </div>
                </div>

                <button
                    onClick={toggleTheme}
                    className="w-full flex items-center justify-between p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200"
                >
                    <span className="text-lg font-medium">{themeButtonText}</span>
                    <ThemeIcon className="w-6 h-6 text-yellow-500 dark:text-yellow-300" />
                </button>

                <button
                    onClick={handleContactClick}
                    className="w-full flex items-center justify-between p-4 bg-red-600 text-white rounded-xl shadow-md hover:bg-red-700 transition duration-200"
                >
                    <span className="text-lg font-medium">Contact Support</span>
                    <FaEnvelope className="w-6 h-6" />
                </button>
            </div>

            <div className="mt-20">
                <BottomNav />
            </div>
        </div>
    );
}