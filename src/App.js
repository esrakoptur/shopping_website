import { Routes, Route, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Products from "./pages/Products";
import User from "./pages/User";
import Tops from "./pages/Tops"
import Jeans from "./pages/Jeans"
import Shoes from "./pages/Shoes"
import Cart from "./pages/Cart"
import Navbar  from "./components/Navbar";
import Favs from "./pages/Favs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        
        <Route path="/products" element={<Products /> }/>
        <Route path ="/user" element={<User/>}/>
        <Route path ="/tops" element={<Tops/>}/>
        <Route path ="/jeans" element={<Jeans/>}/>
        <Route path ="/shoes" element={<Shoes/>}/>
        <Route path ="/cart" element={<Cart/>}/>
        <Route path ="/favs" element={<Favs/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
