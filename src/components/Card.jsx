const Card = (item) => {
   return(
    <div className="card" style={{width: "fit-content"}}>
    <a href={`/closeup/${item.id}`} ><img style={{maxWidth: '300px'}} src="/tshirt1.jpg" className="card-img-top" alt="..."/> </a>
        <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="price">{item.price}</p>
            <a href="/favs" className="btn btn-light"><img width={"40px"} height={"40px"} src="/heart.svg" /></a>
            <a href="/cart" className="btn btn-light"><img width={"40px"} height={"40px"} src="/shopping-cart.svg" /></a>
        </div>

</div>        
   )

}

export default Card;