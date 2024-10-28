import { FavoritesContext } from './FavoritesContext'
import { useReducer } from 'react'

const initialState = []

const FavoritesProvider = ({ children }) => {
  const favoritesReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case '[FAVORITE] add':
        return [...state, action.payload]

      case '[FAVORITE] increment':
        return state.map((item) => {
          const qty = item.quantity + 1
          if (item.id === action.payload) {
            return { ...item, quantity: qty }
          }
          return item
        })

      case '[FAVORITE] decrement':
        return state.map((item) => {
          const qty = item.quantity - 1
          if (item.id === action.payload && item.quantity > 1) {
            return { ...item, quantity: qty }
          }

          return item
        })

      case '[FAVORITE] delete':
        return state.filter((element) => element.id !== action.payload)

      default:
        return state
    }
  }

  const [favorites, dispatch] = useReducer(favoritesReducer, initialState)

  const addFavorite = (favorite) => {
    favorite.quantity = 1
    const action = {
      type: '[FAVORITE] add',
      payload: favorite
    }
    dispatch(action)
  }

  const incrementFavorite = (id) => {
    const action = {
      type: '[FAVORITE] increment',
      payload: id
    }
    dispatch(action)
  }

  const decrementFavorite = (id) => {
    const action = {
      type: '[FAVORITE] decrement',
      payload: id
    }
    dispatch(action)
  }

  const deleteFavorite = (id) => {
    const action = {
      type: '[FAVORITE] delete',
      payload: id
    }
    dispatch(action)
  }

  /*
  const [favorites, setFavorites] = useState({})

  const addFavorites = (key) => {
    if (key in favorites) {
      setFavorites((prevFavorites) => ({
        ...prevFavorites,
        [key]: prevFavorites[key] + 1
      }))
    } else {
      setFavorites((prevFavorites) => ({
        ...prevFavorites,
        [key]: (prevFavorites[key] || 0) + 1
      }))
    }
  }
  */

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        incrementFavorite,
        decrementFavorite,
        deleteFavorite
      }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}

export default FavoritesProvider
