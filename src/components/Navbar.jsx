const Navbar = () => {
    return(
        <div className="text-center">

            <div className="tape text-center">
        <marquee direction="left" scrollamount="7" loop="infinite"  >
          200 TL VE UZERI ALISVERISLERINIZDE KARGO BEDAVA 📦
        </marquee>
      </div>

      <div className="topnav row w-100 " >

        <div className="left-top col-4 d-flex">
          <a className="active" href="#home">Home</a>
          <div className="dropdown">
          <a href="/products">All Products</a>
            <div className="dropdown-content">
              <a href="/tops">Tops</a>
              <a href="/jeans"> Jeans</a>
              <a href="/shoes"> Shoes</a>
            </div>
          </div>
 
          <a href="mailto: basics@info.com">Contact Us</a>

        </div>

        <div className="col-4 logo-css text-center " >
          <h1 >b a s i c s</h1>
        </div>

        <div className="col-4 right-top ">
          <a><img width={"40px"} height={"40px"} src="/shopping-cart.svg" /> </a>
          <a href="/user"> <img width={"40px"} height={"40px"} src="/user.svg" /></a>
          <a><img width={"40px"} height={"40px"} src="/search.svg" /> </a>
          
          <button className="menu-button" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
            cdrem
          </button>
          <div className="offcanvas offcanvas-top" tabIndex={-1} id="offcanvasTop" aria-labelledby="offcanvasTopLabel" data-bs-scroll="true" >
                <div className="offcanvas-header">
                    <h5 id="offcanvasTopLabel"><img className="navbar-logo" src="logo.png" /></h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body d-contents">
                    ...
                </div>

            </div>

        </div>

      </div>


            </div>

    )
}

export default Navbar