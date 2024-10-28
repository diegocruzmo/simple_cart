import PropTypes from 'prop-types'
import { useContext } from 'react'
import { FavoritesContext } from '../context/FavoritesContext'
import { useState } from 'react'

const CardComponent = ({ image, title, price, id }) => {
  const { addFavorite, deleteFavorite } = useContext(FavoritesContext)
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    // const key = e.target.getAttribute('data-id').toString()
    addFavorite({ id, title, image, price })
    setAdded(true)
  }

  const handleRemove = () => {
    deleteFavorite(id)
    setAdded(false)
  }

  return (
    <article className='grid-item border border-1 border-primary'>
      <img src={image} className='cart-image' alt={title} />
      <hr className='border border-primary border-1 opacity-50' />
      <p className='text-primary'>
        {title} - ${price}
      </p>
      {added ? (
        <button type='button' className='btn btn-danger' onClick={handleRemove}>
          Remove
        </button>
      ) : (
        <button type='button' className='btn btn-primary' onClick={handleAdd}>
          Add
        </button>
      )}
    </article>
  )
}

CardComponent.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired
}

export default CardComponent
