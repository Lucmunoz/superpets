import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { PetsContext } from '../context/PetsContext'
import Swal from 'sweetalert2'
import axios from 'axios'
import { ENDPOINT } from '../config/constants.js'

const PublicacionListada = () => {
  const navigate = useNavigate()
  const { arregloMisPublicaciones, setearMisPublicaciones, alertaSweet } = useContext(PetsContext)

  const goToActualizarPublicacion = (id) => {
    /* Se debe ingresar petición al backend que permita actualizar la publicación */
    navigate(`/actualizarpublicacion/${id}`)
  }

  const funcionEliminar = (id) => {
    const token = window.sessionStorage.getItem('token')
    axios.delete(ENDPOINT.mispublicaciones, { headers: { Authorization: `Bearer ${token}` }, data: { IdEliminar: id } })
      .then(({ data }) => {
        console.log(data.message)
      })
      .catch(({ response: { data } }) => console.log(data.message))
      // Nueva petición para actualizar la data
    axios.get(ENDPOINT.mispublicaciones, { headers: { Authorization: `Bearer ${token}` } })
      .then(({ data }) => {
        setearMisPublicaciones(data)
        alertaSweet('success', 'Publicación eliminada con éxito', '#8EC63D')
      })
      .catch(({ response: { data } }) => alertaSweet('error', `${data.message}`, '#FF0000'))
  }

  const preguntarEliminar = (id) => {
    /* Se debe ingresar petición al backend que permita eliminar la publicación */
    Swal.fire({
      title: '¿Está seguro que desea eliminar la publicación?',
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showDenyButton: true,
      confirmButtonColor: '#062D3D',
      denyButtonText: 'Cancelar',
      confirmButtonText: 'Sí, eliminar',
      customClass: 'alertaSweetEstilos'
    }).then((result) => {
      if (result.isConfirmed) {
        funcionEliminar(id)
      }
    })
  }

  return (
    <>
      {arregloMisPublicaciones.map((publicacion) => {
        return (
          <div className='container-fluid bg-light p-0 publicacionListada border-bottom' key={publicacion.id}>
            <div className='row container-fluid p-1 '>
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
                <button type='button' className='botonEstilosEliminar' onClick={() => preguntarEliminar(publicacion.id)}>Eliminar</button>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default PublicacionListada
