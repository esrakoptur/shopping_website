import { Routes, Route, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Products from "./pages/Products";
import User from "./pages/User";
import Electronics from "./pages/Electronics"
import Jewelery from "./pages/Jewelery"
import Men from "./pages/Men"
import Women from "./pages/Women"
import Cart from "./pages/Cart"
import Navbar  from "./components/Navbar";
import Favs from "./pages/Favs";
import Closeup from "./pages/Closeup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Products /> }/>
        <Route path ="/user" element={<User/>}/>
        <Route path ="/electronics" element={<Electronics/>}/>
        <Route path ="/jewelery" element={<Jewelery/>}/>
        <Route path ="/men'sclothing" element={<Men/>}/>
        <Route path ="/women'sclothing" element={<Women/>}/>
        <Route path ="/cart" element={<Cart/>}/>
        <Route path ="/favs" element={<Favs/>}/>
        <Route path ="/closeup/:id" element={<Closeup/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
