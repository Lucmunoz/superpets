import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ActualizarPublicacion = () => {
  const navigate = useNavigate()
  const [isloading, setIsloading] = useState(true)
  const [publicacion, setPublicacion] = useState('')
  const handlePublicacion = (event) => setPublicacion({ ...publicacion, [event.target.name]: event.target.value })

  useEffect(() => {
    if (!window.sessionStorage.getItem('token')) {
      // navigate('/login')
    }
  }, [])

  const getData = async () => {
    try {
      /* Reemplazar por consulta para obtener datos de la publicación a editar */
      const response = await fetch('/productos.json')
      const data = await response.json()
      setPublicacion(data[0])
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    if (Object.keys(publicacion).length !== 0) {
      setIsloading(false)
    } else {
      setIsloading(true)
    }
  }, [publicacion])

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
      <div className='container-fluid col-11 col-sm-auto my-3 bg-white'>
        <div className='p-4 py-4'>
          <div className='d-flex justify-content-center pb-3'>
            <h2 className=''>Actualizar publicación</h2>
          </div>
          <form>
            <div className='form-group pb-3'>
              <label htmlFor='exampleFormControlInput1'>Nombre producto </label>
              <input type='text' name='nombre' className='d-sm-none form-control fst-italic' placeholder='...' value={publicacion.nombre} onChange={handlePublicacion} />
              <input type='text' name='nombre' className='d-none d-sm-flex form-control fst-italic' style={{ width: '467px' }} id='nombre' placeholder='...' value={publicacion.nombre} onChange={handlePublicacion} />
            </div>
            <div className='form-group pb-3'>
              <label htmlFor='exampleFormControlTextarea1'>Descripción del producto</label>
              <textarea className='form-control fst-italic' name='descripcion' rows='3' placeholder='...' value={publicacion.descripcion} onChange={handlePublicacion} />
            </div>
            <div className='form-group pb-3'>
              <label htmlFor='exampleFormControlTextarea1'>Precio del producto</label>
              <input type='number' className='form-control fst-italic' name='precio' placeholder='...' value={publicacion.precio} onChange={handlePublicacion} />
            </div>
            <div className='form-group pb-3'>
              <label htmlFor='exampleFormControlInput1'>Ingresa la URL de tu imagen</label>
              <input type='text' className='form-control fst-italic' name='imagen' placeholder='...' value={publicacion.imagen} onChange={handlePublicacion} />
              <div className='d-flex justify-content-center p-3'>
                <img style={{ height: '70px' }} src={publicacion.imagen} alt='MDN' />
              </div>
            </div>
            <div className='d-flex gap-2 justify-content-center'>
              <button type='submit' className='btn btn-sm btn-success'>Guardar Cambios</button>
              <button type='submit' className='btn btn-sm btn-danger'>Eliminar Publicación</button>
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
