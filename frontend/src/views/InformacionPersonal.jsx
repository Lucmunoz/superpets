import { ENDPOINT } from '../config/constants.js'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { PetsContext } from '../context/PetsContext.jsx'

const InformacionPersonal = () => {
  const { usuario, cambiarUsuario, cerrarSesion } = useContext(PetsContext)
  const navigate = useNavigate()
  // aqui enviar petición para traer información del usuario
  const traerDataUsuario = () => {
    const token = window.sessionStorage.getItem('token')
    axios.get(ENDPOINT.users, { headers: { Authorization: `Bearer ${token}` } })
      .then(({ data: [user] }) => cambiarUsuario({ ...user }))
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

  const eliminarcuenta = () => {
    const token = window.sessionStorage.getItem('token')
    axios.delete(ENDPOINT.users, { headers: { Authorization: `Bearer ${token}` } })
      .then(({ data }) => {
        window.alert(data.message)
        cerrarSesion()
        navigate('/')
      })
      .catch(({ response: { data } }) => {
        console.error(data)
        cerrarSesion()
        window.alert(data.message)
        cambiarUsuario(null)
        navigate('/')
      })
  }

  return (
    <main>
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
          <button type='button' className='botonEstilosEliminar' onClick={eliminarcuenta}>Eliminar Cuenta</button>
        </div>
      </div>
    </main>
  )
}

export default InformacionPersonal
