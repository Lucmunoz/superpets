import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ActualizarPublicacion = () => {
  const { id: idPublicacion } = useParams()
  const navigate = useNavigate()
  const [isloading, setIsloading] = useState(true)
  const [publicacionTemporal, setPublicacionTemporal] = useState('')

  const handlePublicacion = (event) => setPublicacionTemporal({ ...publicacionTemporal, [event.target.name]: event.target.value })

  const handleForm = (event) => {
    event.preventDefault()
    if (!publicacionTemporal.nombre.trim()) {
      return window.alert('Ingrese un nombre válido')
    }
    if (!publicacionTemporal.descripcion.trim()) {
      return window.alert('Ingrese una descripcion válida')
    }
    if (!publicacionTemporal.imagen.trim()) {
      return window.alert('Debe ingresar una URL para la imágen.')
    }
    alert('publicación modificada')
    navigate('/mispublicaciones')
  }

  const goBack = (id) => {
    navigate('/mispublicaciones')
  }

  useEffect(() => {
    /* //Código para verificar existencia de token. De lo contrario, redirigir a ingresar
     if (!window.sessionStorage.getItem('token')) {navigate('/ingresar')} */

    /* *Reemplazar codigo cuando se realice backend***/
    if (!window.sessionStorage.getItem('usuario')) {
      navigate('/ingresar')
    }
    /* *Reemplazar codigo cuando se realice backend***/
  }, [])

  const getData = async () => {
    try {
      // Reemplazar por consulta para obtener datos de la publicación a editar
      const response = await fetch('/productos.json')
      const data = await response.json()
      const index = data.findIndex((publicacion) => publicacion.id === idPublicacion)
      setPublicacionTemporal(data[index])
    } catch (error) {
    }
  }

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    if (publicacionTemporal !== '') {
      setIsloading(false)
    } else {
      setIsloading(true)
    }
  }, [publicacionTemporal])

  const mostrarCargando = () => {
    return (
      <div className='align-self-center text-center'>
        <div className='spinner-border' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </div>
      </div>
    )
  }

  const mostrarData = () => {
    return (
      <div className='container-fluid col-11 col-sm-auto my-3 bg-white bordesRed'>
        <div className='p-4 py-4'>
          <div className='d-flex justify-content-center pb-3'>
            <h1 className='tituloForm'>Actualizar publicación <i className='fa-regular fa-pen-to-square ps-2' /></h1>
          </div>
          <form onSubmit={handleForm}>
            <div className='form-group pb-3'>
              <label htmlFor='exampleFormControlInput1' className='labelEstilos'>Nombre producto </label>
              <input type='text' name='nombre' className='d-sm-none form-control fst-italic' placeholder='...' value={publicacionTemporal.nombre} onChange={handlePublicacion} />
              <input type='text' name='nombre' className='d-none d-sm-flex form-control fst-italic' style={{ width: '467px' }} id='nombre' placeholder='...' value={publicacionTemporal.nombre} onChange={handlePublicacion} />
            </div>
            <div className='form-group pb-3'>
              <label htmlFor='exampleFormControlTextarea1' className='labelEstilos'>Descripción del producto</label>
              <textarea className='form-control fst-italic' name='descripcion' rows='3' placeholder='...' value={publicacionTemporal.descripcion} onChange={handlePublicacion} />
            </div>
            <div className='form-group pb-3'>
              <label htmlFor='exampleFormControlTextarea1' className='labelEstilos'>Precio del producto</label>
              <input type='number' className='form-control fst-italic' name='precio' placeholder='...' value={publicacionTemporal.precio} onChange={handlePublicacion} />
            </div>
            <div className='form-group pb-3'>
              <label htmlFor='exampleFormControlInput1' className='labelEstilos'>Ingresa la URL de tu imagen</label>
              <input type='text' className='form-control fst-italic' name='imagen' placeholder='...' value={publicacionTemporal.imagen} onChange={handlePublicacion} />
              <div className='d-flex justify-content-center p-3'>
                <img style={{ height: '70px' }} src={publicacionTemporal.imagen} alt='MDN' />
              </div>
            </div>
            <div className='d-flex gap-2 justify-content-center'>
              <button type='submit' className='botonEstilos'>Guardar Cambios</button>
              <button type='button' className='botonEstilos' onClick={() => goBack()}>Regresar</button>
            </div>
          </form>
        </div>
      </div>
    )
  }

  return (
    <main className='d-flex align-items-center'>
      {isloading ? mostrarCargando() : mostrarData()}
    </main>
  )
}

export default ActualizarPublicacion
