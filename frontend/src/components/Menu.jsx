import { NavLink } from 'react-router-dom'
import Buscador from './Buscador'
import { useContext } from 'react'
import { PetsContext } from '../context/PetsContext'

const Menu = () => {
  const { numeroTotalProductos, usuario, cerrarSesion } = useContext(PetsContext)
  const cambiarMenu = ({ isActive }) => isActive ? 'navbar active' : 'navbar'
  const irACerrar = () => {
    cerrarSesion()
    window.alert('Has cerrado la sesión, te llevaremos a la Home')
  }

  return (
    <nav className='navbar navbar-dark navbar-expand-lg'>
      <div className='container-fluid'>
        <span className='navbar-brand'>
          <NavLink to='/'> <img src='/LogoSuperPets.png' alt='logoMarca' style={{ width: '80px' }} /></NavLink>
        </span>
        <button className='navbar-toggler' type='button' data-bs-toggle='offcanvas' data-bs-target='#offcanvasNavbar' aria-controls='offcanvasNavbar'>
          <span className='navbar-toggler-icon' />
        </button>
        <div className='offcanvas offcanvas-end' id='offcanvasNavbar' aria-labelledby='offcanvasNavbarLabel'>
          <div className='offcanvas-header'>
            <h5 className='offcanvas-title' id='offcanvasNavbarLabel'>SUPERPETS</h5>
            <button type='button' style={{ backgroundColor: 'rgb(221, 217, 217)' }} className='btn-close text-reset' data-bs-dismiss='offcanvas' aria-label='Close' />
          </div>
          <div className='offcanvas-body'>
            <ul className='navbar-nav justify-content-end flex-grow-1 pe-3'>
              <li>
                <Buscador />
              </li>
              <li className='nav-item'>
                <NavLink to='/' className={cambiarMenu}>
                  <i className='fa-solid fa-house' />
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/tienda' className={cambiarMenu}>Tienda</NavLink>
              </li>
              {usuario &&
                <li className='nav-item'><NavLink to='/perfil' className={cambiarMenu}> <i className='fa-solid fa-user' /></NavLink></li>}
              {!usuario &&
                <li className='nav-item'><NavLink to='/registrarse' className={cambiarMenu}>Registrarse</NavLink></li>}
              {!usuario &&
                <li className='nav-item'>
                  <NavLink to='/ingresar' className={cambiarMenu}>Ingresar</NavLink>
                </li>}

              {/* rutas protegidas */}
              <li className='nav-item'>
                <NavLink to='/favoritos' className={cambiarMenu}>
                  <i className='fa-solid fa-heart' />
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/carrito' className={cambiarMenu}>
                  <i className='fa-solid fa-cart-shopping' />
                  <div className='divContainerTotal'>
                    <span className='totalNav'>{numeroTotalProductos()}</span>
                  </div>
                </NavLink>
              </li>
              {usuario && <li className='cerrarSesion'> <NavLink to='/' onClick={irACerrar}> <i className='fa-solid fa-arrow-right-from-bracket' /></NavLink></li>}
            </ul>

          </div>
        </div>
      </div>
    </nav>
  )
}

export default Menu
