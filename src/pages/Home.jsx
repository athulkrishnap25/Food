import { useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";
import { useState, useEffect } from "react";

export default function Home() {
  const { name } = useContext(UserContext);

  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);


    return (
    <div className="relative h-screen w-screen">
      <div
        className={`fixed inset-0 flex items-center justify-center bg-gradient-to-r from-gray-900 to-black text-white text-4xl font-bold transition-opacity duration-1000 ${
          showSplash ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        Hello, {name ? name : "Guest"}!
      </div>
      <div className="flex items-center justify-center h-screen w-screen bg-gray-100">
        <h1 className="text-3xl font-semibold">Welcome to Main Page 🚀</h1>
      </div>
    </div>
  );
}