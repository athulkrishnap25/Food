import { useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";
import { useState, useEffect } from "react";
import Carousel from "../components/Carousel"; 
import CategoryCard from "../components/CategoryCard";
import FoodCard from "../components/foodCard.jsx";

export default function Home() {
  const { name } = useContext(UserContext);
  const categories = [
  { name: "Briyani", image: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg" },
  { name: "Mandi", image: "https://img.freepik.com/premium-photo/close-up-chicken-mandi-rice-dish-generative-ai_786587-4197.jpg?w=2000" },
  { name: "Sadya", image: "https://c8.alamy.com/comp/2K01W1K/kerala-ona-sadya-onam-feast-vegetarian-thali-served-on-a-round-plate-with-banana-leaf-2K01W1K.jpg" },
  { name: "Desserts", image: "https://tse1.mm.bing.net/th/id/OIP.rdi8I9-zmOXzNZOgxxJc3wHaLH?rs=1&pid=ImgDetMain&o=7&rm=3" },
  { name: "Chinese", image: "https://cooksimply.co.uk/wp-content/uploads/2023/04/char-siu-air-fryer-cook-simply-600x404.jpg" },
  { name: "Beverages", image: "https://img.freepik.com/premium-photo/different-beautiful-cocktails-dark-background-bar-counter-3d-illustration-generative-ai_170984-4736.jpg?w=2000" },
];

  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <div 
        className="fixed inset-0 flex items-center justify-center bg-gradient-to-r from-gray-900 to-black text-white text-4xl font-bold transition-opacity duration-1000 opacity-100"
      >
        Hello, {name ? name : "Guest"}!
      </div>
    );
  }

  return (
    <div className="relative w-screen bg-gradient-to-r from-gray-900 to-black text-white">
      <div>
        <h1 className="text-4xl font-bold p-5 text-left">
            QuickBite 
        </h1>
      </div>
      <div className="flex items-center justify-center p-4">
        <div className="w-full"> 
          <Carousel />
        </div>
      </div>
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Categories</h1>
      <div className="flex gap-4 overflow-x-auto">
        {categories.map((cat, index) => (
          <CategoryCard key={index} image={cat.image} name={cat.name} />
        ))}
      </div>
    </div>
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Suggested For You</h1>
      <div className="p-4">
      <div className="flex gap-4 overflow-x-auto">
        {categories.map((cat, index) => (
          <FoodCard key={index} image={cat.image} name={cat.name} />
        ))}
      </div>
    </div>
    </div>
    </div>
    
  );
}