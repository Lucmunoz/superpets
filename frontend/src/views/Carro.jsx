import { useEffect, useContext } from 'react'
import ProductoCarro from '../components/ProductoCarro'
import { useNavigate, Link } from 'react-router-dom'
import { PetsContext } from '../context/PetsContext'

const Carro = () => {
  const { productosCarro, totalCarro, setearProductosCarro, vaciarCarro } = useContext(PetsContext)
  const navigate = useNavigate()

  const goToPagar = () => {
    window.alert('Pago Exitoso')
    vaciarCarro()
  }

  useEffect(() => {
    /* //Código para verificar existencia de token. De lo contrario, redirigir a ingresar
     if (!window.sessionStorage.getItem('token')) {navigate('/ingresar')} */

    /* *Reemplazar codigo cuando se realice backend***/
    if (!window.sessionStorage.getItem('usuario')) {
      navigate('/ingresar')
    } else {
      if (window.sessionStorage.getItem('carro')) {
        const arregloTemporal = JSON.parse(window.sessionStorage.getItem('carro'))
        console.log(arregloTemporal)
        setearProductosCarro(arregloTemporal)
      }
    }
    /* *Reemplazar codigo cuando se realice backend***/
  }, [])

  const carroVacio = () => {
    return (
      <div className='bg-white d-flex flex-column align-items-center justify-content-center'>
        <h1 className='tituloForm'>Mi Carro <i className='fa-solid fa-cart-shopping' /></h1>
        <div>
          <img style={{ height: '180px' }} src='/emptyCart.png' alt='Imagen carro vacío' />
        </div>
        <div className='d-flex flex-column text-center'>
          <h2 style={{ color: ' #ED5C01', margin: '0', fontSize: '28px' }}>Tu carro está vacío</h2>
          <p>No pierdas mas tiempo, revisa nuestra amplia oferta de productos para tu mascota!</p>
          <div className='pt-3'>
            <button type='button' className='botonEstilos'> <Link to='/tienda' className='text-white text-decoration-none'>Ir a tienda</Link> </button>
          </div>
        </div>
      </div>
    )
  }

  const mostrarDataCarro = () => {
    return (
      <div className='d-flex flex-column'>
        <h1 className='tituloForm'>Mi Carro <i className='fa-solid fa-cart-shopping' /></h1>
        <div className='d-flex flex-column'>
          <ProductoCarro />
        </div>
        <div className='container-fluid bg-light'>
          <div className='row justify-content-center'>
            <div className='col-6 col-sm-4 d-flex justify-content-center py-3'>
              <div className='pe-2'>
                <span><strong>Total:</strong> ${(totalCarro / 1000).toFixed(3)}</span>
              </div>
              <div className='ps-2'>
                <button type='button' className='botonEstilos' onClick={() => goToPagar()}>Ir a pagar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <main className='d-flex align-items-center'>
      <div className='container-fluid col-11 col-xl-10 col-xxl-9 bg-white bordesRed'>
        {productosCarro.length !== 0 ? mostrarDataCarro() : carroVacio()}
      </div>
    </main>
  )
}

export default Carro
