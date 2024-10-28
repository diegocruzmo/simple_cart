import { Badge } from '@mui/material'
import { ShoppingCart } from '@mui/icons-material'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { FavoritesContext } from '../context/FavoritesContext'

const NavbarComponent = () => {
  const { favorites } = useContext(FavoritesContext)
  return (
    <nav
      className='navbar bg-primary navbar-expand-lg border-bottom border-body'
      data-bs-theme='dark'
    >
      <div className='container-fluid'>
        <NavLink to='/' className='navbar-brand' href='#'>
          Virtual Store
        </NavLink>

        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav me-auto'>
            <li className='nav-item'>
              <NavLink to='/' className='nav-link active' aria-current='page'>
                Products
              </NavLink>
            </li>
          </ul>
          <NavLink to='/cart'>
            <Badge badgeContent={favorites.length} color='secondary'>
              <ShoppingCart color='action' />
            </Badge>
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default NavbarComponent
