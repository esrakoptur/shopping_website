
import Navbar from "../components/Navbar";
import {useParams} from 'react-router-dom'
const Closeup = () => {

    const {id} = useParams()
 
    return(
        <div className="text-center ">
            <div>
                <Navbar />
            </div>
        
            <div className="card mb-3 " style={{width: "70%" , display: "inline-block" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="/tshirt1_3.jpg" className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                        <h5 className="card-title"></h5>
                        <br/>
                        <p className="price">50$</p>
                        <br/>
                        <p className="card-text">Oversized graphic tee by Levi's, complete with a midnight-inspired 
                        wolf print to front. Baggy jersey style Ft. a crew neck, 
                        drop shoulders and short sleeves, finished with a longline hem..</p>
                        <br/>
                        <small>*Model is 170cm/5'7" and wearing size Small</small>
                        <br/>
                        <br/>
                        <div className="btn-group" role="group" aria-label="Basic outlined example">
                            <button type="button" className="btn btn-outline-dark">S</button>
                            <button type="button" className="btn btn-outline-dark">M</button>
                            <button type="button" className="btn btn-outline-dark">L</button>
                        </div>
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