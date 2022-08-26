import { useState, useEffect } from "react";
import { GetAllCategories } from "../api";
import Search from "./Search";

const Navbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    GetAllCategories().then((result) => {setCategories(result)});
   
  }, []);

  return (
    <div className="text-center">
      <div className="tape text-center">
        <marquee direction="left" scrollamount="7" loop="infinite">
          200 TL VE UZERI ALISVERISLERINIZDE KARGO BEDAVA 📦
        </marquee>
      </div>

      <div className="topnav row w-100 ">
        <div className="left-top col-2 col-lg-4 d-lg-flex">
          <div className="d-none d-lg-flex">
            <a className="active" href="/">
              Home
            </a>
            <div className="dropdown">
              <a href="/products">All Products</a>
              <div className="dropdown-content">
                {categories.map((item) =>   <a key={item} href={`/${item.replace(/\s/g, '')}`}>{ item}</a>)}
              </div>
            </div>
            <a href="mailto: basics@info.com">Contact Us</a>
          </div>
          <div className="d-block d-lg-none">
            {/* <div className="dropdown">
              <button className="menu-button">
                <img width={"40px"} height={"40px"} src="/menu.svg" />{" "}
              </button>
              <div className="dropdown-content">
                <a href="/">Home</a>
                <a href="/products"> All Products</a>
                <a href="/shoes"> Contact US</a>
                <a href="/shoes"> Contact US</a>
                <a href="/shoes"> Contact US</a>
                <a href="/shoes"> Contact US</a>
              </div>
            </div> */}
            <button
              className="menu-button"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasLeft"
              aria-controls="offcanvasLeft"
            >
              <img width={"40px"} height={"40px"} src="/menu.svg" />
            </button>

            <div
              className="offcanvas offcanvas-start"
              tabIndex={-1}
              id="offcanvasLeft"
              aria-labelledby="offcanvasLeftLabel"
            >
              <div className="offcanvas-header">
                <h5 id="offcanvasLeftLabel"></h5>
                <button
                  type="button"
                  className="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <a href="/">Home</a>
                <a href="/products"> All Products</a>
                <a href="mailto: basics@info.com">Contact US</a>
                <a href="/user"> Login</a>
                <a href="/favs"> Favorites</a>
                <a href="/cart"> Shopping Cart</a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-8 col-lg-4 logo-css text-center ">
          <h1>b a s i c s</h1>
        </div>

        <div className="col-2 col-lg-4 right-top d-flex gap-0.5 ">
          <div className="d-none d-lg-flex ">
            <a href="/cart">
              <img width={"40px"} height={"40px"} src="/shopping-cart.svg" />{" "}
            </a>
            <a href="/favs">
              <img width={"40px"} height={"40px"} src="/heart.svg" />{" "}
            </a>
            <a href="/user">
              {" "}
              <img width={"40px"} height={"40px"} src="/user.svg" />
            </a>
          </div>
           <Search />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
