import { Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext.jsx"; 
import { Provider } from 'react-redux'; 
import store from './redux/store';     
import Instruction1 from "./pages/Instruction1";
import Instruction2 from "./pages/Instruction2";
import Instruction3 from "./pages/Instruction3";
import Home from "./pages/Home";
import Cart from "./pages/Cart"; 
import NorthIndian from "./pages/NorthIndian";
import Arabian from "./pages/Arabian"; 
import SouthIndian from "./pages/SouthIndian"; 
import Chinese from "./pages/Chinese"; 
import Desserts from "./pages/Desserts";
import Beverages from "./pages/Beverages";
import Orders from "./pages/orders";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import Account from "./pages/account";
import InfoPage from "./pages/InfoPage"; 



export default function App() {
  return (
    <UserProvider>
      <Provider store={store}> 
        <ThemeProvider>
        <div>
          <Routes>
            <Route path="/" element={<Instruction1 />} />
            <Route path="/instruction/2" element={<Instruction2 />} />
            <Route path="/instruction/3" element={<Instruction3 />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cart" element={<Cart />} /> 
            <Route path="/category/North-Indian" element={<NorthIndian />} />
            <Route path="/category/Arabian" element={<Arabian />} />
            <Route path="/category/SouthIndian" element={<SouthIndian />} />
            <Route path="/category/Chinese" element={<Chinese />} /> 
            <Route path="/category/Desserts" element={<Desserts />} /> 
            <Route path="/category/Beverages" element={<Beverages />} />
            <Route path="/orders" element={<Orders />} />
             <Route path="/account" element={<Account />} />
             <Route path="/info" element={<InfoPage />} /> 
          </Routes>
        </div>
        </ThemeProvider>
      </Provider>
    </UserProvider>
  );
}