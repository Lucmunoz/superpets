import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { PetsContext } from '../context/PetsContext'

const PublicacionListada = () => {
  const navigate = useNavigate()
  const { arregloMisPublicaciones } = useContext(PetsContext)

  const goToActualizarPublicacion = (id) => {
    /* Se debe ingresar petición al backend que permita actualizar la publicación */
    navigate(`/actualizarpublicacion/${id}`)
  }

  const eliminarPublicacion = (id) => {
    /* Se debe ingresar petición al backend que permita eliminar la publicación */
    alert(`publicacion ${id} eliminada exitosamente`)
  }

  return (
    <>
      {arregloMisPublicaciones.map((publicacion) => {
        return (
          <div className='container-fluid bg-light p-0 publicacionListada' key={publicacion.id}>
            <div className='row container-fluid p-1'>
              <div className='col-3 col-sm-2 p-0 '>
                <div className='text-center'>
                  <img className='' style={{ height: '70px' }} src={publicacion.imagen} alt='MDN' />
                </div>
              </div>
              <div className='col-9 col-md-7 d-flex flex-column justify-content-center'>
                <span> <strong>{publicacion.nombre}</strong></span>
                <div className='text-truncate fst-italic fw-light text-muted'>
                  {publicacion.descripcion}
                </div>
              </div>
              <div className='d-flex col-md-3 gap-1 justify-content-center align-items-center'>
                <button type='button' className='botonEstilos' onClick={() => goToActualizarPublicacion(publicacion.id)}>Editar</button>
                <button type='button' className='botonEstilosEliminar' onClick={() => eliminarPublicacion(publicacion.id)}>Eliminar</button>
              </div>
            </div>
            <hr id='hrListada' />
          </div>
        )
      })}
    </>
  )
}

export default PublicacionListada
