import { GetProductsByCategory } from "../api";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import Card from "../components/Card";

const Jewelery = () => {

    const [jewelery, setJewelery] = useState([])

    useEffect(() => {
      GetProductsByCategory('jewelery').then((result) => setJewelery(result) )
    }, [])
    

    return(
        <div className="text-center">
            <div>
                <Navbar />
            </div>
            <div className="d-flex gap-3 justify-content-center">
                { jewelery.map((item) => <Card {...item} />)  }
            </div>
        </div>
    )
}
export default Jewelery