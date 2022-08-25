const Card = (item) => {
   return(
    <div className="card" style={{ width:'300px'}}>
    <a href={`/closeup/${item.id}`} ><img style={{width: '150px', height: '200px'}} src={item.image} className="card-img-top" alt="..."/> </a>
        <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="price">{item.price}</p>
            <div> 
                <a href="/favs" className="btn btn-light"><img width={"40px"} height={"40px"} src="/heart.svg" /></a>
                <a href="/cart" className="btn btn-light"><img width={"40px"} height={"40px"} src="/shopping-cart.svg" /></a>
            </div>
        </div>

</div>        
   )

}

export default Card;