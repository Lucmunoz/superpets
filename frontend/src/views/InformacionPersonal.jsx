import { ENDPOINT } from '../config/constants.js'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { PetsContext } from '../context/PetsContext.jsx'
import Swal from 'sweetalert2'

const InformacionPersonal = () => {
  const { usuario, cambiarUsuario, cerrarSesion, alertaSweet } = useContext(PetsContext)
  const [loading, setLoading] = useState(true)
  const [loadingEliminar, setLoadingEliminar] = useState(false)
  const navigate = useNavigate()
  // aqui enviar petición para traer información del usuario
  const traerDataUsuario = () => {
    const token = window.sessionStorage.getItem('token')
    axios.get(ENDPOINT.users, { headers: { Authorization: `Bearer ${token}` } })
      .then(({ data: [user] }) => {
        setLoading(false)
        cambiarUsuario({ ...user })
      })
      .catch(({ response: { data } }) => {
        console.error(data)
        window.sessionStorage.removeItem('token')
        cambiarUsuario(null)
        navigate('/')
      })
  }

  useEffect(() => {
    // Código para verificar existencia de token. De lo contrario, redirigir a ingresar
    if (!window.sessionStorage.getItem('token')) { navigate('/ingresar') }
  }, [])

  useEffect(() => {
    traerDataUsuario()
  }, [])

  const preguntarEliminar = (id) => {
    Swal.fire({
      title: '¿Está seguro que desea eliminar su usuario?',
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showDenyButton: true,
      confirmButtonColor: '#062D3D',
      denyButtonText: 'Cancelar',
      confirmButtonText: 'Sí, eliminar',
      customClass: 'alertaSweetEstilos'
    }).then((result) => {
      if (result.isConfirmed) {
        setLoadingEliminar(true)
        eliminarCuenta()
      }
    })
  }

  const eliminarCuenta = () => {
    const token = window.sessionStorage.getItem('token')
    axios.delete(ENDPOINT.users, { headers: { Authorization: `Bearer ${token}` } })
      .then(({ data }) => {
        setLoadingEliminar(false)
        cerrarSesion()
        alertaSweet('success', `${data.message}`, '#8EC63D')
        navigate('/')
      })
      .catch(({ response: { data } }) => {
        // console.error(data)
        setLoadingEliminar(false)
        cerrarSesion()
        alertaSweet('error', data.message, '#FF0000')
        cambiarUsuario(null)
        navigate('/')
      })
  }

  const mostrarSpinner = () => {
    return (
      <div className='pt-5 text-center'>
        <div className='spinner-border' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </div>
      </div>

    )
  }

  const mostrarDataUsuario = () => {
    return (
      <div className='divInfoPersonal'>
        <h1>Información Personal </h1>
        <h2 className='h2PerfilYPersonal'>Nombre </h2>
        <span>{usuario?.nombre}</span>
        <hr />
        <h2 className='h2PerfilYPersonal'>Email</h2>
        <span>{usuario?.correo}</span>
        <hr />
        <h2 className='h2PerfilYPersonal'>RUT</h2>
        <span>{usuario?.rut}</span>
        <hr />
        <h2 className='h2PerfilYPersonal'>Teléfono</h2>
        <span>{usuario?.telefono}</span>
        <hr />
        <h2 className='h2PerfilYPersonal'>Dirección</h2>
        <span>{usuario?.direccion}</span>
        <hr />
        <br />
        <br />
        <div className='d-flex justify-content-center gap-4'>
          <button type='button' className='botonEstilos '> <Link to='/perfil' className='text-white text-decoration-none'>Regresar</Link> </button>
          {loadingEliminar ? mostrarBotonEliminarCargando() : mostrarBotonEliminar()}

        </div>
      </div>
    )
  }

  const mostrarBotonEliminar = () => { return (<button type='button' className='botonEstilosEliminar' onClick={preguntarEliminar}>Eliminar Cuenta</button>) }
  const mostrarBotonEliminarCargando = () => {
    return (
      <>
        <button class='botonEstilosEliminar btn d-flex align-items-center justify-content-center' type='button' disabled>
          <span class='spinner-border spinner-border-sm' role='status' aria-hidden='true' />
          <p className='p-0 ps-2 m-0 text-white '>Eliminando...</p>
        </button>
      </>
    )
  }

  return (
    <main>
      {loading ? mostrarSpinner() : mostrarDataUsuario()}
    </main>
  )
}

export default InformacionPersonal
