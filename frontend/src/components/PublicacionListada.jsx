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
          <div className='container-fluid bg-light p-0' key={publicacion.id}>
            <div className='row container-fluid m-0 p-1'>
              <div className='col-3 col-sm-2 p-0 '>
                <div className='text-center'>
                  <img className='' style={{ height: '70px' }} src={publicacion.imagen} alt='MDN' />
                </div>
              </div>
              <div className='col-9  col-md-7 d-flex flex-column justify-content-center p-0'>
                <h6 className='p-0 m-0'>{publicacion.nombre}</h6>
                <div className='text-truncate fst-italic fw-light text-muted'>
                  {publicacion.descripcion}
                </div>
              </div>
              <div className='d-flex col-md-3  gap-2 justify-content-center align-items-center p-0 py-2 ms-auto'>
                <button type='button' className='btn btn-sm btn-secondary' onClick={() => goToActualizarPublicacion(publicacion.id)}>editar</button>
                <button type='button' className='btn btn-sm btn-danger' onClick={() => eliminarPublicacion(publicacion.id)}>Eliminar</button>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default PublicacionListada
