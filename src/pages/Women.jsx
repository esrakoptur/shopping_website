import Navbar from "../components/Navbar";
import { GetAllProducts } from "../api";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import { GetProductsByCategory } from "../api";


const Women= () => {

    const [womensclothing, setWomensclothing] = useState([])

    useEffect(() => {
      GetProductsByCategory('women\'s clothing').then((result) => setWomensclothing(result) )
    }, [])
    

    return(
        <div className="text-center">
            <div>
                <Navbar />
            </div>
            <div className="d-flex gap-3 justify-content-center">
                { womensclothing.map((item) => <Card key={item} {...item} />)  }
            </div>
        </div>
    )
}
export default Women