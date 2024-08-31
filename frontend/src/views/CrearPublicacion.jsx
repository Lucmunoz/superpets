import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const datosPublicacion = {
  nombre: '',
  descripcion: '',
  precio: '',
  imagen: ''
}

const CrearPublicacion = () => {
  const navigate = useNavigate()
  const [publicacion, setPublicacion] = useState(datosPublicacion)
  const handlePublicacion = (event) => setPublicacion({ ...publicacion, [event.target.name]: event.target.value })

  const handleForm = (event) => {
    event.preventDefault()

    if (
      !publicacion.nombre.trim()) {
      return window.alert('Ingrese un nombre válido')
    }
    if (
      !publicacion.descripcion.trim()) {
      return window.alert('Ingrese una descripcion válida')
    }
    if (!publicacion.imagen.trim()) {
      return window.alert('Debe ingresar una URL para la imágen.')
    }
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

  return (
    <main className='d-flex align-items-center'>
      <div className='container-fluid col-11 my-3 col-sm-auto bg-white'>
        <div className='p-4 py-4'>
          <div className='d-flex justify-content-center pb-3'>
            <h2 className='text-center'>Crear Publicación <i className='fa-regular fa-square-plus' /></h2>
          </div>
          <form onSubmit={handleForm}>
            <div className='form-group pb-3'>
              <label htmlFor='exampleFormControlInput1'>Nombre del producto </label>
              <input type='text' name='nombre' className='d-sm-none form-control fst-italic' placeholder='Ingresa el Nombre de tu producto...' value={publicacion.nombre} onChange={handlePublicacion} />
              <input type='text' name='nombre' className='d-none d-sm-flex form-control fst-italic' style={{ width: '467px' }} placeholder='Ingresa el Nombre de tu producto...' value={publicacion.nombre} onChange={handlePublicacion} />
            </div>
            <div className='form-group pb-3'>
              <label htmlFor='exampleFormControlTextarea1'>Descripción del producto</label>
              <textarea className='form-control fst-italic' name='descripcion' id='descripcion' rows='3' placeholder='Ingresa el mayor detalle posible de tu producto para que los usuarios no tengan ninguna duda!' value={publicacion.descripcion} onChange={handlePublicacion} />
            </div>
            <div className='form-group pb-3'>
              <label htmlFor='exampleFormControlTextarea1'>Valor del producto</label>
              <input type='number' className='form-control fst-italic' name='precio' placeholder='Ingresa el valor de venta...' value={publicacion.precio} onChange={handlePublicacion} />
            </div>
            <div className='form-group pb-3'>
              <label htmlFor='exampleFormControlInput1'>Ingresa la URL de tu imagen</label>
              <input type='text' name='imagen' className='form-control fst-italic' placeholder='Ingresa la URL de la imágen' value={publicacion.imagen} onChange={handlePublicacion} />
            </div>
            <div className='text-center'>
              <button type='submit' className='btn btn-danger'>Crear Publicación</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}

export default CrearPublicacion
