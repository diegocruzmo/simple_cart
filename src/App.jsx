import NavbarComponent from './components/NavbarComponent'
import { Routes, Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import ProductsView from './views/ProductsView'
import CartView from './views/CartView'
import ProductsProvider from './context/ProductsProvider'
import FavoritesProvider from './context/FavoritesProvider'

function App() {
  return (
    <ProductsProvider>
      <FavoritesProvider>
        <NavbarComponent />
        <div className='container container-fluid'>
          <Routes>
            <Route path='/' element={<ProductsView />}></Route>
            <Route path='cart' element={<CartView />}></Route>
            <Route path='/*' element={<Navigate to='/' />}></Route>
          </Routes>
        </div>
      </FavoritesProvider>
    </ProductsProvider>
  )
}

export default App
