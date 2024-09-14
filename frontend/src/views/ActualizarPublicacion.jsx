import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { ENDPOINT } from '../config/constants.js'
import { PetsContext } from '../context/PetsContext.jsx'

const ActualizarPublicacion = () => {
  const { id } = useParams()
  const { alertaSweet } = useContext(PetsContext)
  const publicacionInicial = {
    idProducto: id,
    nombre: '',
    descripcion: '',
    precio: '',
    imagen: ''
  }
  const navigate = useNavigate()
  const [publicacionTemporal, setPublicacionTemporal] = useState(publicacionInicial)
  const [loading, setLoading] = useState(false)

  const cambiarInput = (event) => {
    setPublicacionTemporal({ ...publicacionTemporal, [event.target.name]: event.target.value })
  }

  const handleForm = (event) => {
    event.preventDefault()
    setLoading(true)
    const token = window.sessionStorage.getItem('token')
    axios.put(ENDPOINT.mispublicaciones, publicacionTemporal, { headers: { Authorization: `Bearer ${token}` } })
      .then(({ data }) => alertaSweet('success', `${data.message}`, '#8EC63D'))
      .catch(({ response: { data } }) => {
        setLoading(false)
        alertaSweet('error', `${data.message}`, '#FF0000')
      })
    navigate('/mispublicaciones')
  }

  const goBack = () => {
    navigate('/mispublicaciones')
  }

  const getData = async () => {
    axios.get(ENDPOINT.producto + `/${id}`)
      .then(({ data }) => {
        setPublicacionTemporal(data)
      })
      .catch(({ response: { data } }) => alertaSweet('error', `${data.message}`, '#FF0000'))
  }
  //
  useEffect(() => {
    // Código para verificar existencia de token. De lo contrario, redirigir a ingresar
    if (!window.sessionStorage.getItem('token')) {
      navigate('/ingresar')
    }
    getData()
  }, [])

  const mostrarBotonActualizarPublicacion = () => {
    return (
      <div>
        <button type='submit' className='botonEstilos'>Guardar Cambios</button>
      </div>
    )
  }
  const mostrarBotonCargando = () => {
    return (
      <>
        <div className='d-flex justify-content-center'>
          <button class=' botonEstilos btn d-flex align-items-center justify-content-center' type='button' disabled>
            <span class='spinner-border spinner-border-sm' role='status' aria-hidden='true' />
            <p className='p-0 ps-2 m-0'>Guardando...</p>
          </button>
        </div>
      </>
    )
  }

  return (
    <main className='d-flex align-items-center'>
      <div className='container-fluid col-11 col-sm-auto my-3 bg-white bordesRed'>
        <div className='p-4 py-4'>
          <div className='d-flex justify-content-center pb-3'>
            <h1 className='tituloForm'>Actualizar publicación <i className='fa-regular fa-pen-to-square ps-2' /></h1>
          </div>
          <form onSubmit={handleForm}>
            <div className='form-group pb-3'>
              <label htmlFor='exampleFormControlInput1' className='labelEstilos'>Nombre producto </label>
              <input type='text' name='nombre' className='d-none d-sm-flex form-control fst-italic' style={{ width: '467px' }} id='nombre' placeholder='...' value={publicacionTemporal.nombre} onChange={cambiarInput} required />
            </div>
            <div className='form-group pb-3'>
              <label htmlFor='exampleFormControlTextarea1' className='labelEstilos'>Descripción del producto</label>
              <textarea className='form-control fst-italic' name='descripcion' rows='3' placeholder='...' value={publicacionTemporal.descripcion} onChange={cambiarInput} required />
            </div>
            <div className='form-group pb-3'>
              <label htmlFor='exampleFormControlTextarea1' className='labelEstilos'>Precio del producto</label>
              <input type='number' className='form-control fst-italic' name='precio' placeholder='...' value={publicacionTemporal.precio} onChange={cambiarInput} required />
            </div>
            <div className='form-group pb-3'>
              <label htmlFor='exampleFormControlInput1' className='labelEstilos'>Ingresa la URL de tu imagen</label>
              <input type='text' className='form-control fst-italic' name='imagen' placeholder='...' value={publicacionTemporal.imagen} onChange={cambiarInput} required />
              <div className='d-flex justify-content-center p-3'>
                {publicacionTemporal.imagen !== '' && <img style={{ height: '70px' }} src={publicacionTemporal.imagen} alt='MDN' required />}
              </div>
            </div>
            <div className='d-flex gap-2 justify-content-center'>
              <button type='button' className='botonEstilos' onClick={() => goBack()}>Regresar</button>
              {loading ? mostrarBotonCargando() : mostrarBotonActualizarPublicacion()}
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}

export default ActualizarPublicacion
