import React, { createContext, useState, useContext } from 'react';

const initialProducts = [
  {
    foodName: "Gulab Jamun",
    foodPrice: "₹150.00",
    foodDescription: "Deep-fried milk solids balls soaked in a light, sweet, and aromatic sugar syrup.",
    image: "https://tse3.mm.bing.net/th/id/OIP.pUZBr5_gk2K3Z3dvQlML1gHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    foodName: "Rasgulla",
    foodPrice: "₹160.00",
    foodDescription: "Spongy cottage cheese balls cooked in light sugar syrup.",
    image: "https://madhurasrecipe.com/wp-content/uploads/2023/10/Rasgulla-Featured-Image.jpg",
  },
  {
    foodName: "Chicken Mandi",
    foodPrice: "₹650.00",
    foodDescription: "Traditional Yemeni dish of rice and chicken cooked in a deep pit.",
    image: "https://img.freepik.com/premium-photo/close-up-chicken-mandi-rice-dish-generative-ai_786587-4197.jpg?w=2000",
  },
  {
    foodName: "Lamb Kabsa",
    foodPrice: "₹800.00",
    foodDescription: "Aromatic mixed rice dish, commonly regarded as the national dish of Saudi Arabia.",
    image: "https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2023/04/15/3773861-571269809.jpg?itok=pgy9HiVz",
  }
];

export const ProductContext = createContext();
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(initialProducts);
  const addProduct = (newProduct) => {
    const productWithId = { ...newProduct, id: Date.now() }; 
    setProducts((prevProducts) => [productWithId, ...prevProducts]);
  };

  return (
    <ProductContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
export const useProducts = () => useContext(ProductContext);