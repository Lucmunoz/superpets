import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { PetsContext } from '../context/PetsContext'
import { useNavigate, Link } from 'react-router-dom'
import ProductoCompras from '../components/ProductoCompras'
import { ENDPOINT } from '../config/constants'

const MisCompras = () => {
  const { setearComprasRealizadas, comprasRealizadas, alertaSweet } = useContext(PetsContext)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  const getData = () => {
    const token = window.sessionStorage.getItem('token')
    axios.get(ENDPOINT.miscompras, { headers: { Authorization: `Bearer ${token}` } })
      .then(({ data }) => {
        setearComprasRealizadas(data)
        setLoading(false)
      })
      .catch(({ response: { data } }) => alertaSweet('error', `${data.message}`, '#FF0000'))
  }

  useEffect(() => {
    // Código para verificar existencia de token. De lo contrario, redirigir a ingresar
    if (!window.sessionStorage.getItem('token')) {
      navigate('/ingresar')
    }
    getData()
  }, [])

  const mostrarSpinner = () => {
    return (
      <div className='p-5 container-fluid text-center'>
        <div className='spinner-border' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </div>
      </div>
    )
  }

  const mostrarDataCompras = () => {
    return (
      <div className='bg-white d-flex flex-column'>
        <h1 className='tituloForm'>Mis Compras <i className='fa-solid fa-bag-shopping' /></h1>
        <ProductoCompras />
        <div style={{ textAlign: 'center' }}>
          <button type='button' className='botonEstilos'> <Link to='/perfil' className='text-white text-decoration-none'>Regresar</Link> </button>
        </div>
      </div>
    )
  }

  const sinCompras = () => {
    return (
      <div className='bg-white d-flex flex-row justify-content-center align-items-center'>
        <div className='d-flex flex-column flex-sm-row align-items-center'>
          <div className='d-flex align-items-center'>
            <img className='img-fluid' src='/carrovacio.jpg' alt='Imagen carro vacío' />
          </div>
          <div className='d-flex flex-column text-center'>
            <h1>¡Hey!</h1>
            <h2 style={{ fontSize: '22px' }}>¿Aún no has visto nuestras ofertas?</h2>
            <p>No pierdas mas tiempo, hay increibles productos esperando. <strong>  ¡Ellos, lo merecen!</strong></p>
            <br />
            <div style={{ width: '320px', margin: '0 auto', display: 'flex' }}>
              <Link to='/perfil' className='link'>Regresar</Link>
              <Link to='/tienda' className='link'> Ir a la Tienda</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const mostrarCompras = () => {
    return (
      comprasRealizadas.length !== 0 ? mostrarDataCompras() : sinCompras()
    )
  }

  return (
    <main className='d-flex align-items-center'>
      <div className='container-fluid col-10 bg-white bordesRed'>
        {loading ? mostrarSpinner() : mostrarCompras()}
      </div>
    </main>
  )
}

export default MisCompras
// }
//
