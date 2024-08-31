import { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { PetsContext } from '../context/PetsContext'

import PublicacionListada from '../components/PublicacionListada'

const MisPublicaciones = () => {
  const { arregloMisPublicaciones, setArregloMisPublicaciones, usuario } = useContext(PetsContext)
  const navigate = useNavigate()

  const getData = async () => {
    try {
      const response = await fetch('/productos.json')
      const data = await response.json()
      const arregloPublicacionesTemp = data.filter((publicacion) => {
        return usuario.id === publicacion.id_usuarios
      })

      setArregloMisPublicaciones(arregloPublicacionesTemp)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (window.sessionStorage.getItem('token')) { // <----- ELIMINAR
      // if (!window.sessionStorage.getItem('token')) {
      navigate('/ingresar')
    }

    getData()
  }, [])

  const sinPublicaciones = () => {
    return (
      <>
        <div className='bg-white d-flex flex-column align-items-center justify-content-center'>
          sin publicacionhs
        </div>
      </>
    )
  }

  const mostrarPublicaciones = () => {
    return (
      <div className='bg-white d-flex flex-column align-items-center justify-content-center pb-5'>
        <h1 className='p-4'>Mis publicaciones </h1>
        <div className='d-flex flex-column flex-md-row container-fluid align-items-center justify-content-md-end bg-light  py-4 gap-2 gap-md-4'>
          <div className='d-flex flex-column flex-sm-row align-items-center gap-2 '>
            <h5 className='p-0 m-0'>Busqueda</h5>
            <input type='text' id='busqueda-publicaciones' className='form-control fst-italic' placeholder='Título, nombre, precio, etc...' />
          </div>
          <div className='d-flex flex-column flex-sm-row align-items-center gap-2 '>
            <h5 className='p-0 m-0'>Ordenar</h5>
            <select className='form-select fst-italic' aria-label='Default select example'>
              <option value='DEFAULT'>Seleccione...</option>
              <option value='1'>{'Nombre A -> Z'}</option>
              <option value='2'>{'Nombre Z -> A'}</option>
              <option value='3'>Precio Ascendente</option>
              <option value='3'>Precio Descendente</option>
            </select>
          </div>
        </div>
        <div className='container-fluid p-0 pt-3 d-flex flex-column gap-2' />
        <PublicacionListada />
      </div>
    )
  }

  return (
    <main className='d-flex align-items-center'>
      <div className='container-fluid col-11 col-xl-10 col-xxl-9 my-3 bg-white'>
        {arregloMisPublicaciones.length !== 0 ? mostrarPublicaciones() : sinPublicaciones()}
      </div>
    </main>
  )
}

export default MisPublicaciones
