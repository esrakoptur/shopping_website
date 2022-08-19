const Homepage = () => {
    return (
        <div className="App">
    
    
      <div className="tape text-center  ">
         <marquee direction="left" scrollamount="7" loop="infinite"  > 
              200 TL VE UZERI ALISVERISLERINIZDE KARGO BEDAVA 📦                          
         </marquee> 
      </div>
          
          <div className="topnav row" >
            <div className="left-top col-sm-4"> 
              <a className="active" href="#home">Home</a>
              <a href="/second">All Products</a>
              <a href="#contact">Contact Us</a>
            </div>
    
            <div className="col-sm-4 logo-css text-center " >
              <h1 >b a s i c</h1>
            </div>
    
            <div className="col-sm-4 right-top ">
               <img width={"40px"} height={"40px"}  src="/shopping-cart.svg"/>
               <img width={"40px"} height={"40px"}  src="/user.svg"/>
               <img  width={"40px"} height={"40px"}  src="/search.svg"/>
            </div>
    
            </div>
    
            <div className="homepage-pic"> <img src="/model.jpg"/> </div>
        
       
    
    </div>
    
        
      );
}
export default Homepage