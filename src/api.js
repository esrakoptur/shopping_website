export const GetAllProducts = async () => {

    const products = await fetch('https://fakestoreapi.com/products')
   return products.json()
 

}

export const GetSingleProduct = async () =>{

    const product = await fetch('https://fakestoreapi.com/products/1')
    return product.json()

}