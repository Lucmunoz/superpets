import { useEffect, useContext } from 'react'
import ProductoCarro from '../components/ProductoCarro'
import { useNavigate } from 'react-router-dom'
import { PetsContext } from '../context/PetsContext'

const Carro = () => {
  const { productosCarro, agregarCarro, quitarCarro, totalCarro } = useContext(PetsContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (window.sessionStorage.getItem('token')) { // <----- ELIMINAR
      // if (!window.sessionStorage.getItem('token')) {
      navigate('/ingresar')
    }
  }, [])

  const carroVacio = () => {
    return (
      <>
        <div className='bg-white d-flex flex-column align-items-center justify-content-center'>
          <div>
            <img style={{ height: '200px' }} src='/emptyCart.png' alt='Imagen carro vacío' />
          </div>
          <div className='d-flex flex-column px-4 pb-4 text-center'>
            <h3>Tu carro está vacío</h3>
            <h5 className='pb-4'>No pierdas mas tiempo. revisa nuestra amplia oferta de productos para tu mascota!</h5>
            <button type='button ' className='btn btn-sm btn-secondary me-auto ms-auto'>Ver productos</button>
          </div>
        </div>
      </>

    )
  }

  const mostrarDataCarro = () => {
    return (
      <div className='d-flex flex-column py-5'>
        <h1 className='text-center '>Mi Carro <i className='fa-solid fa-cart-shopping' /></h1>
        <div className='d-flex flex-column'>
          <ProductoCarro />
        </div>
        <div className='container-fluid bg-light p-2'>
          <div className='row justify-content-center'>
            <div className='col-6 col-sm-4 d-flex flex-column justify-content-center align-items-start ps-4 py-2'>
              <div><h5 className='p-0 m-0'>Total:</h5></div>
              <div><span className='p-0 m-0'>${(totalCarro / 1000).toFixed(3)}</span></div>
            </div>
            <div className='col-6 col-sm-4 d-flex align-items-center justify-content-end'>
              <span><button type='button' className='btn btn-secondary btn-sm py-1 px-4'>Ir a pagar</button></span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <main className='d-flex align-items-center'>
      <div className='container-fluid col-11 col-xl-10 col-xxl-9 my-3 bg-white'>
        {productosCarro.length !== 0 ? mostrarDataCarro() : carroVacio()}
      </div>
    </main>
  )
}

export default Carro
