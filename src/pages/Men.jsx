import Navbar from "../components/Navbar";
import { GetAllProducts } from "../api";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import { GetProductsByCategory } from "../api";

const Men= () => {

    const [mensclothing, setMensclothing] = useState([])

    useEffect(() => {
      GetProductsByCategory('men\'s clothing').then((result) => setMensclothing(result) )
    }, [])
    


    return(
        <div className="text-center">
            <div>
                <Navbar />
            </div>

            <div className="d-flex gap-3 justify-content-center">
                {  mensclothing.map((item) => <Card key={item} {...item} />)  }
            </div>

        </div>
    )
}
export default Men