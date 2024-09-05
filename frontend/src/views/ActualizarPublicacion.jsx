import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { ENDPOINT } from '../config/constants.js'

const ActualizarPublicacion = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const publicacionInicial = {
    idProducto: id,
    nombre: '',
    descripcion: '',
    precio: '',
    imagen: ''
  }

  const [publicacionTemporal, setPublicacionTemporal] = useState(publicacionInicial)
  const cambiarInput = (event) => setPublicacionTemporal({ ...publicacionTemporal, [event.target.name]: event.target.value })
  const handleForm = (event) => {
    event.preventDefault()
    if (publicacionTemporal.nombre.trim() === '') {
      return window.alert('Ingrese un nombre válido')
    }
    if (publicacionTemporal.descripcion.trim() === '') {
      return window.alert('Ingrese una descripcion válida')
    }

    if (publicacionTemporal.precio.trim() === '') {
      return window.alert('Ingrese una descripcion válida')
    }

    if (publicacionTemporal.imagen.trim() === '') {
      return window.alert('Debe ingresar una URL para la imágen.')
    }

    const token = window.sessionStorage.getItem('token')
    axios.put(ENDPOINT.mispublicaciones, publicacionTemporal, { headers: { Authorization: `Bearer ${token}` } })
      .then(({ data }) => window.alert(data.message))
      .catch(({ response: { data } }) => window.alert(data.message))
    navigate('/mispublicaciones')
  }

  const goBack = () => {
    navigate('/mispublicaciones')
  }

  useEffect(() => {
    // Código para verificar existencia de token. De lo contrario, redirigir a ingresar
    if (!window.sessionStorage.getItem('token')) {
      navigate('/ingresar')
    }
  }, [])

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
              <input type='text' name='nombre' className='d-none d-sm-flex form-control fst-italic' style={{ width: '467px' }} id='nombre' placeholder='...' value={publicacionTemporal.nombre} onChange={cambiarInput} />
            </div>
            <div className='form-group pb-3'>
              <label htmlFor='exampleFormControlTextarea1' className='labelEstilos'>Descripción del producto</label>
              <textarea className='form-control fst-italic' name='descripcion' rows='3' placeholder='...' value={publicacionTemporal.descripcion} onChange={cambiarInput} />
            </div>
            <div className='form-group pb-3'>
              <label htmlFor='exampleFormControlTextarea1' className='labelEstilos'>Precio del producto</label>
              <input type='number' className='form-control fst-italic' name='precio' placeholder='...' value={publicacionTemporal.precio} onChange={cambiarInput} />
            </div>
            <div className='form-group pb-3'>
              <label htmlFor='exampleFormControlInput1' className='labelEstilos'>Ingresa la URL de tu imagen</label>
              <input type='text' className='form-control fst-italic' name='imagen' placeholder='...' value={publicacionTemporal.imagen} onChange={cambiarInput} />
              <div className='d-flex justify-content-center p-3'>
                {publicacionTemporal.imagen !== '' && <img style={{ height: '70px' }} src={publicacionTemporal.imagen} alt='MDN' />}
              </div>
            </div>
            <div className='d-flex gap-2 justify-content-center'>
              <button type='submit' className='botonEstilos'>Guardar Cambios</button>
              <button type='button' className='botonEstilos' onClick={() => goBack()}>Regresar</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}

export default ActualizarPublicacion
