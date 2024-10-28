import { useContext } from 'react'
import { FavoritesContext } from '../context/FavoritesContext'

const CartView = () => {
  const { favorites, incrementFavorite, decrementFavorite, deleteFavorite } =
    useContext(FavoritesContext)

  const total = () => {
    return favorites.reduce((total, favorite) => {
      return total + favorite.price * favorite.quantity
    }, 0)
  }

  const handleClick = () => {
    print()
  }

  return (
    <>
      <table className='table text-center'>
        <thead>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>Price</th>
            <th scope='col'>Quantity</th>
            <th scope='col'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {favorites.map((favorite) => (
            <tr key={favorite.id}>
              <th>{favorite.title}</th>
              <td>{favorite.price}</td>
              <td className='d-flex justify-content-center align-items-center'>
                <button
                  onClick={() => decrementFavorite(favorite.id)}
                  className='btn  outline'
                >
                  -
                </button>
                <button className='btn btn-primary'>{favorite.quantity}</button>
                <button
                  onClick={() => incrementFavorite(favorite.id)}
                  className='btn outline'
                >
                  +
                </button>
              </td>
              <td>
                <button
                  onClick={() => deleteFavorite(favorite.id)}
                  type='button'
                  className='btn btn-danger'
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4 className='text-end'>Total: ${total()}</h4>
      <div className='d-grid gap-2'>
        <button onClick={handleClick} className='btn btn-primary'>
          Buy
        </button>
      </div>
    </>
  )
}

export default CartView
