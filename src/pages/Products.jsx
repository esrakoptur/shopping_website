import Card from "../components/Card";
import Navbar from "../components/Navbar";
import { GetAllProducts } from "../api";
import { useState, useEffect } from "react";

const Products = () => {

  const [products, setProducts] = useState([])


 useEffect(() => {
  GetAllProducts().then((res) => {setProducts(res)})
 }, [])
 
  

  return (
    <div className="text-center ">
      <Navbar />
      <div> ALL PRODUCTS </div>

      <div className="d-flex flex-wrap gap-3 p-3 justify-content-center">
   {   products.map((item) => <Card key={item.id} {...item} />)}
     
      </div>
    </div>
  );
};
export default Products;
