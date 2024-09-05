import axios from 'axios'
import { useContext, useEffect } from 'react'
import { PetsContext } from '../context/PetsContext'
import { useNavigate, Link } from 'react-router-dom'
import ProductoCompras from '../components/ProductoCompras'
import { ENDPOINT } from '../config/constants'

const MisCompras = () => {
  const { setearComprasRealizadas, comprasRealizadas } = useContext(PetsContext)
  const navigate = useNavigate()

  const getData = () => {
    const token = window.sessionStorage.getItem('token')
    axios.get(ENDPOINT.miscompras, { headers: { Authorization: `Bearer ${token}` } })
      .then(({ data }) => {
        // console.log(data)
        setearComprasRealizadas(data)
      })
      .catch(({ response: { data } }) => window.alert(data.message))
  }

  useEffect(() => {
    /* //Código para verificar existencia de token. De lo contrario, redirigir a ingresar
     if (!window.sessionStorage.getItem('token')) {navigate('/ingresar')} */

    /* *Reemplazar codigo cuando se realice backend***/
    if (!window.sessionStorage.getItem('usuario')) {
      navigate('/ingresar')
    }
    getData()
    /* *Reemplazar codigo cuando se realice backend***/
  }, [])

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
      <div className='p-4 bg-white d-flex flex-row justify-content-center align-items-center'>
        <div><img className='img-fluid' src='/carrovacio.jpg' alt='Imagen carro vacío' /></div>
        <div className='d-flex flex-column p-4 text-center'>
          <h1>Hey!</h1>
          <h3>Aún no has visto nuestras ofertas?</h3>
          <h5 className=''>No pierdas mas tiempo, hay increibles descuento esperando! Ellos, lo merecen!</h5>
          <button type='button' className='btn btn-secondary col-4 me-auto ms-auto'>Ver Productos</button>
        </div>
      </div>
    )
  }

  return (
    <main className='d-flex align-items-center'>
      <div className='container-fluid col-10 bg-white bordesRed'>
        {comprasRealizadas.length !== 0 ? mostrarDataCompras() : sinCompras()}
      </div>
    </main>
  )
}

export default MisCompras
