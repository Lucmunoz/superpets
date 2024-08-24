import { NavLink } from 'react-router-dom'
import Buscador from './Buscador'

const Menu = () => {
  const cambiarMenu = ({ isActive }) => isActive ? 'navbar active' : 'navbar'

  return (
    <nav className='navbar navbar-expand-lg'>
      <div className='container-fluid'>
        <span className='navbar-brand'>SUPERPETS</span>
        <button className='navbar-toggler' type='button' data-bs-toggle='offcanvas' data-bs-target='#offcanvasNavbar' aria-controls='offcanvasNavbar'>
          <span className='navbar-toggler-icon' />
        </button>
        <div className='offcanvas offcanvas-end' id='offcanvasNavbar' aria-labelledby='offcanvasNavbarLabel'>
          <div className='offcanvas-header'>
            <h5 className='offcanvas-title' id='offcanvasNavbarLabel'>SUPERPETS</h5>
            <button type='button' className='btn-close text-reset' data-bs-dismiss='offcanvas' aria-label='Close' />
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
              <li className='nav-item'>
                <NavLink to='/registrarse' className={cambiarMenu}>Registrarse</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/ingresar' className={cambiarMenu}>Ingresar</NavLink>
              </li>
              {/* rutas protegidas */}
              <li className='nav-item'>
                <NavLink to='/favoritos' className={cambiarMenu}>Favoritos</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/vender' className={cambiarMenu}>Vender</NavLink>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </nav>
  )
}

export default Menu
