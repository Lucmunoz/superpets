import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { PetsContext } from '../context/PetsContext'

const Buscador = () => {
  const { busqueda, cambiarInputBusqueda } = useContext(PetsContext)
  return (
    <form className='d-flex justify-content-center pt-2 pe-5 buscador'>
      <input
        className='form-control me-2'
        type='search' placeholder='Busca tu producto ...'
        aria-label='Search'
        value={busqueda}
        onChange={(e) => cambiarInputBusqueda(e)}
      />
      <button className='btn btn-outline-success' type='submit'>
        <Link to='/buscar'><i className='fa-solid fa-magnifying-glass fa-xl' /></Link>
      </button>
    </form>
  )
}

export default Buscador
