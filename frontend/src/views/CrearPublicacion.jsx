import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ENDPOINT } from '../config/constants'
import { PetsContext } from '../context/PetsContext'

const datosPublicacion = {
  nombre: '',
  descripcion: '',
  precio: '',
  imagen: ''
}

const CrearPublicacion = () => {
  const { alertaSweet } = useContext(PetsContext)
  const navigate = useNavigate()
  const [publicacion, setPublicacion] = useState(datosPublicacion)
  const handlePublicacion = (event) => setPublicacion({ ...publicacion, [event.target.name]: event.target.value })

  const goBack = () => {
    navigate('/mispublicaciones')
  }

  const handleForm = (event) => {
    event.preventDefault()

    const token = window.sessionStorage.getItem('token')
    axios.post(ENDPOINT.producto, publicacion, { headers: { Authorization: `Bearer ${token}` } })
      .then(({ data }) => {
        (alertaSweet('success', `${data.message}`, '#8EC63D'))
        setPublicacion(datosPublicacion)
        navigate('/mispublicaciones')
      })
      .catch(({ response: { data } }) => alertaSweet('error', `${data.message}`, 'FF0000'))
  }

  useEffect(() => {
    if (!window.sessionStorage.getItem('token')) {
      navigate('/ingresar')
    }
  }, [])

  return (
    <main className='d-flex align-items-center'>
      <div className='container-fluid col-11 my-3 col-sm-auto bg-white bordesRed'>
        <div className='p-4 py-4'>
          <div className='d-flex justify-content-center pb-3'>
            <h1 className='tituloForm'>Crear Publicación <i className='fa-regular fa-square-plus' /></h1>
          </div>
          <form onSubmit={handleForm}>
            <div className='form-group pb-3'>
              <label className='labelEstilos' htmlFor='exampleFormControlInput1'>Nombre del producto </label>
              <input type='text' name='nombre' className='d-sm-none form-control fst-italic' placeholder='Ingresa el Nombre de tu producto...' value={publicacion.nombre} onChange={handlePublicacion} required />
              <input type='text' name='nombre' className='d-none d-sm-flex form-control fst-italic' style={{ width: '467px' }} placeholder='Ingresa el Nombre de tu producto...' value={publicacion.nombre} onChange={handlePublicacion} required />
            </div>
            <div className='form-group pb-3'>
              <label className='labelEstilos' htmlFor='exampleFormControlTextarea1'>Descripción del producto</label>
              <textarea className='form-control fst-italic' name='descripcion' id='descripcion' rows='3' placeholder='Ingresa el mayor detalle posible de tu producto para que los usuarios no tengan ninguna duda!' value={publicacion.descripcion} onChange={handlePublicacion} required />
            </div>
            <div className='form-group pb-3'>
              <label className='labelEstilos' htmlFor='exampleFormControlTextarea1'>Valor del producto</label>
              <input type='number' className='form-control fst-italic' name='precio' placeholder='Ingresa el valor de venta...' value={publicacion.precio} onChange={handlePublicacion} required />
            </div>
            <div className='form-group pb-3'>
              <label className='labelEstilos' htmlFor='exampleFormControlInput1'>Ingresa la URL de tu imagen</label>
              <input type='text' name='imagen' className='form-control fst-italic' placeholder='Ingresa la URL de la imágen' value={publicacion.imagen} onChange={handlePublicacion} required />
            </div>
            <div className='d-flex justify-content-center p-3'>
              {publicacion.imagen !== '' && <img style={{ height: '70px' }} src={publicacion.imagen} alt='MDN' />}
            </div>
            <div className='d-flex gap-2 justify-content-center'>
              <button type='submit' className='botonEstilos'>Crear publicación</button>
              <button type='button' className='botonEstilos' onClick={() => goBack()}>Regresar</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}

export default CrearPublicacion
