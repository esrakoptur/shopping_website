import Navbar from "../components/Navbar";
import { GetAllProducts } from "../api";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import { GetProductsByCategory } from "../api";

const Electronics = () => {
    
    const [electronics, setElectronics] = useState([])

    useEffect(() => {
      GetProductsByCategory('electronics').then((result) => setElectronics(result) )
    }, [])
    


   return(
    <div className="text-center">
        <div>
            <Navbar />
        </div>
        <div className="d-flex gap-3 justify-content-center">
                { electronics.map((item) => <Card key={item} {...item} />)  }
            </div>

        </div>
   )
    

}

export default Electronics