import { useState, useEffect } from "react";
import { GetAllProducts } from "../api";

const Search = () => {


  const [searchInput, setSearchInput] = useState("")
  
  const [products, setProducts] = useState([])

  const [matchesObjects, setMatchesObjects] = useState([])

 useEffect(() => {
  GetAllProducts().then((res) => {setProducts(res)})
 }, [])
 

  useEffect(() => {
    if (searchInput.length > 0) {
      const matches = products.filter((products) => {
        return products.title.toLowerCase().match(searchInput.toLowerCase())
    })
   setMatchesObjects(matches)
}
   
  }, [searchInput]);

  


  return (
    <>
      <button
        className="menu-button"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasTop"
        aria-controls="offcanvasTop"
      >
        <a>
          <img width={"40px"} height={"40px"} src="/search.svg" />
        </a>
      </button>

      <div
        className="offcanvas offcanvas-top "
        tabIndex={-1}
        id="offcanvasTop"
        aria-labelledby="offcanvasTopLabel"
        data-bs-scroll="true"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasTopLabel"></h5>
          <button
            type="btn"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body d-contents">
          <div className="input-card">
            <div className="input-card-form">
              <input
                onChange={(e) => setSearchInput(e.target.value)}
                type="text"
                className="form-control form-control-lg"
                name="s"
                placeholder="Search for items.."
                aria-label="Search for items.."
              />
              <input type="hidden" name="post_type" value="product" />
            </div>

 <div className="matches">
    {
        matchesObjects.map( (item)=> <div> <a href={`/closeup/${item.id}`}> {item.title} </a> </div> ) 
    }
 </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
