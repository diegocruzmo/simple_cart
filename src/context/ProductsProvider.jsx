import { ProductsContext } from './ProductsContext'
import { useState, useEffect } from 'react'

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()

      setProducts(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsProvider
