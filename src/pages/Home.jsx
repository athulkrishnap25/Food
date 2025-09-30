import { useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";
import { useState, useEffect } from "react";
import Carousel from "../components/Carousel";
import CategoryCard from "../components/CategoryCard";
import FoodCard from "../components/foodCard.jsx";
import BottomNav from "../components/BottomNav";

export default function Home() {
  const { name } = useContext(UserContext);
  const categories = [

    {

      name: "North Indian",

      image:

        "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg",

    },

    {

      name: "Arabian",

      image:

        "https://img.freepik.com/premium-photo/close-up-chicken-mandi-rice-dish-generative-ai_786587-4197.jpg?w=2000",

    },

    {

      name: "South Indian",

      image:

        "https://c8.alamy.com/comp/2K01W1K/kerala-ona-sadya-onam-feast-vegetarian-thali-served-on-a-round-plate-with-banana-leaf-2K01W1K.jpg",

    },

  

    {

      name: "Chinese",

      image:

        "https://cooksimply.co.uk/wp-content/uploads/2023/04/char-siu-air-fryer-cook-simply-600x404.jpg",

    },

    {

      name: "Desserts",

      image:

        "https://tse1.mm.bing.net/th/id/OIP.rdi8I9-zmOXzNZOgxxJc3wHaLH?rs=1&pid=ImgDetMain&o=7&rm=3",

    },

    {

      name: "Beverages",

      image:

        "https://img.freepik.com/premium-photo/different-beautiful-cocktails-dark-background-bar-counter-3d-illustration-generative-ai_170984-4736.jpg?w=2000",

    },
    

  ];

  const suggestedFoods = [
    {
      foodName: "Chicken Tikka Masala",
      foodPrice: "₹400.00",
      foodDescription: "Classic Indian dish with tender chicken in a creamy tomato sauce.",
      image:
        "https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Tikka-Masala-min.jpg",
    },
    {
      foodName: "Spicy Beef Burger",
      foodPrice: "₹350.00",
      foodDescription: "Juicy beef patty topped with jalapeños, pepper jack, and a spicy mayo.",
      image:
        "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pf-edgarcastrejon2-burger-018.jpg?w=400&dpr=1&fit=default&crop=default&auto=format&fm=pjpg&q=75&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-1.1.1&s=b45744391b6a95bed5528dd93ae318c7",
    },
    {
      foodName: "Veggie Spring Rolls",
      foodPrice: "₹120.00",
      foodDescription: "Crispy fried rolls filled with fresh cabbage, carrots, and glass noodles.",
      image:
        "https://www.connoisseurusveg.com/wp-content/uploads/2022/04/baked-spring-rolls-sq.jpg",
    },
    {
      foodName: "Chocolate Fudge Cake",
      foodPrice: "₹450.00",
      foodDescription: "Rich, dense chocolate cake with a velvety smooth fudge frosting.",
      image:
        "https://www.hickoryfarms.com/on/demandware.static/-/Sites-Web-Master-Catalog/default/dw78363360/images/products/decadent-chocolate-fudge-layer-cake-064026-2.jpg",
    },
 
  {
    foodName: "Parotta with Beef Curry",
    foodPrice: "₹180.00",
    foodDescription: "Flaky layered parotta served with spicy Kerala beef curry.",
    image: "https://i.redd.it/ixmmb8ufajq61.jpg"
  },
  {
    foodName: "Appam with Stew",
    foodPrice: "₹150.00",
    foodDescription: "Soft lacy appam paired with mildly spiced coconut milk stew.",
    image: "https://images.slurrp.com/prodarticles/ln1j9x0luf.webp?impolicy=slurrp-20210601&width=1200&height=900&q=75"
  },
  {
    foodName: "Puttu with Kadala Curry",
    foodPrice: "₹100.00",
    foodDescription: "Steamed rice flour cylinders with black chickpea curry.",
    image: "https://i.ytimg.com/vi/e2kxi7BxvLs/maxresdefault.jpg"
  },
  {
    foodName: "Fish Moilee",
    foodPrice: "₹220.00",
    foodDescription: "Fish simmered in creamy coconut milk with subtle spices.",
    image: "https://cdn.grofers.com/assets/search/usecase/banner/kerala_fish_moilee_01.png"
  },
  {
    foodName: "Kerala Sadya",
    foodPrice: "₹350.00",
    foodDescription: "Traditional feast of 24+ vegetarian dishes served on banana leaf.",
    image: "https://www.keralatourism.org/images/cuisine/sadya-1024x576.jpg"
  },
  {
    foodName: "Erachi Varutharacha",
    foodPrice: "₹210.00",
    foodDescription: "Beef cooked in roasted coconut and spices, Kerala style.",
    image: "https://www.slurrp.com/web/_next/image?url=https:%2F%2Fimages.slurrp.com%2Fprod%2Frecipe_images%2Ftranscribe%2Fmain%20course%2FErachi-Varutharacha-Curry.webp%3Fimpolicy%3Dslurrp-20210601%26width%3D1200%26height%3D675&w=3840&q=75"
  },
  {
    foodName: "Kerala Prawn Roast",
    foodPrice: "₹250.00",
    foodDescription: "Spicy prawns roasted with onions, curry leaves, and coconut oil.",
    image: "https://tse3.mm.bing.net/th/id/OIP.fulpzb-ClUFHoH8K5S102gHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    foodName: "Karimeen Pollichathu",
    foodPrice: "₹300.00",
    foodDescription: "Pearl spot fish marinated and wrapped in banana leaf.",
    image: "https://www.krazybutterfly.com/wp-content/uploads/2022/01/Niraamaya-Karimeen-Pollichathu-e1643300273851.jpg"
  },
  {
    foodName: "Kerala Chicken Fry",
    foodPrice: "₹180.00",
    foodDescription: "Deep-fried chicken pieces with Kerala spices and curry leaves.",
    image: "https://hungryforever.net/wp-content/uploads/2018/01/kerala-style-chicken-fry-600x286.jpg"
  },
  {
    foodName: "Idiyappam Egg Curry",
    foodPrice: "₹160.00",
    foodDescription: "String hoppers served with spicy Kerala-style egg curry.",
    image: "https://images.slurrp.com/prod/articles/j67tfxujzj.webp?impolicy=slurrp-20210601&width=1200&height=900&q=75"
  },
  {
    foodName: "Nadan Kozhi Curry",
    foodPrice: "₹190.00",
    foodDescription: "Traditional Kerala chicken curry cooked with coconut oil.",
    image: "https://tse2.mm.bing.net/th/id/OIP.ImZKCamYQWQlrd5ODdsB9QHaLG?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    foodName: "Avial",
    foodPrice: "₹120.00",
    foodDescription: "Mixed vegetables cooked with coconut, yogurt, and curry leaves.",
    image: "https://www.masalakorb.com/wp-content/uploads/2021/06/Easy-Aviyal-Recipe-Aviyal-Curry-V1.jpeg"
  },
  {
    foodName: "Thalassery Biryani",
    foodPrice: "₹280.00",
    foodDescription: "Fragrant biryani from Malabar made with short-grain rice.",
    image: "https://4.bp.blogspot.com/-ki7mtItaI4I/WAE0421NZaI/AAAAAAAAAnk/1suTKwebHBYz-XPe07rUhJ2nj9OyZGj3ACLcB/s1600/z15.jpg"
  },
  {
    foodName: "Meen Curry",
    foodPrice: "₹230.00",
    foodDescription: "Tangy fish curry with tamarind and coconut oil tempering.",
    image: "https://melam.com/wp-content/uploads/2022/12/alappuzha-meen-curry.jpg"
  },
]


  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-r from-gray-900 to-black text-white text-4xl font-bold transition-opacity duration-1000 opacity-100">
        Hello, {name ? name : "Guest"}!
      </div>
    );
  }

  return (
    <div className="relative w-screen bg-gradient-to-r from-gray-900 to-black text-white">
      <div>
        <h1 className="text-4xl font-bold p-5 text-left">QuickBite</h1>
      </div>
      <div className="flex items-center justify-center p-4">
        <div className="w-full">
          <Carousel />
        </div>
      </div>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Categories</h1>
        <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none]">
          {categories.map((cat, index) => (
            <CategoryCard key={index} image={cat.image} name={cat.name} />
          ))}
        </div>
      </div>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Suggested For You</h1>
        <div className="p-4">
          <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none]">
            {suggestedFoods.map((food, index) => (
              <FoodCard
                key={index}
                image={food.image}
                foodName={food.foodName}
                foodPrice={food.foodPrice}
                foodDescription={food.foodDescription}
              />
            ))}
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <BottomNav />
    </div>
  );
}