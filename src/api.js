export const GetAllProducts = async () => {

    const products = await fetch('https://fakestoreapi.com/products')
   return products.json()
 

}

export const GetSingleProduct = async (id) =>{

    const product = await fetch(`https://fakestoreapi.com/products/${id}`)
    return product.json()

}

export const GetAllCategories = async () => {
    const categories = await fetch('https://fakestoreapi.com/products/categories')
    return categories.json()
}

export const GetProductsByCategory = async (ctg) => {
    const products = await fetch(`https://fakestoreapi.com/products/category/${ctg}`)
    return products.json()
}