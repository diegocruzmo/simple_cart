import CardComponent from '../components/CardComponent'
import { useContext } from 'react'
import { ProductsContext } from '../context/ProductsContext'

const ProductsView = () => {
  const { products } = useContext(ProductsContext)

  return (
    <>
      <h2 className='text-primary text-center m-4'>List of Products</h2>
      <div className='grid-container'>
        {products.map((product) => (
          <CardComponent
            key={product?.id}
            image={product?.image}
            title={product?.title}
            price={product?.price}
            id={product?.id}
          />
        ))}
      </div>
    </>
  )
}

export default ProductsView
