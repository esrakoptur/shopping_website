
import Navbar from "../components/Navbar";
import {useParams} from 'react-router-dom'
import { GetSingleProduct } from "../api";
import { useState, useEffect } from "react";
const Closeup = () => {

    const {id} = useParams()

    const [product, setProduct] = useState({})

   useEffect(() => {
    GetSingleProduct(id).then((res)=> setProduct(res))
   }, [])
   
 
    return(
        <div className="text-center">
            <div>
                <Navbar />
            </div>
        
            <div className="card mb-3 " style={{width: "70%" , display: "inline-block" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={product.image} className="img-fluid rounded-start" alt="..."/> 
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <br/>
                        <p className="price"> ${product.price}</p>
                        <br/>
                        <p className="card-text">{product.description}</p>
                        <small>from: {product.category}</small>
                        <br/>
                        <br/>
                        <br/>                    

                        <a href="/favs" className="btn btn-light"><img width={"40px"} height={"40px"} src="/heart.svg" /></a>
                        <a href="/cart" className="btn btn-light"><img width={"40px"} height={"40px"} src="/shopping-cart.svg" /></a>
                        </div>

                    

                    </div>
                </div>
            </div>

            

        </div>
    )
}
export default Closeup