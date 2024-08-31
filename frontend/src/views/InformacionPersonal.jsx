import { ENDPOINT } from '../config/constants.js'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { PetsContext } from '../context/PetsContext.jsx'

const InformacionPersonal = () => {
  const { usuario, cambiarUsuario } = useContext(PetsContext)
  const navigate = useNavigate()
  // aqui enviar petición para traer información del usuario
  const getDeveloperData = () => {
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

  useEffect(getDeveloperData, [])

  const eliminarcuenta = () => { window.alert('cuenta eliminada') }

  return (
    <main>
      <div className='divInfoPersonal'>
        <h1>Información Personal </h1>
        <p>Nombre </p>
        <span>Juan López</span>
        <hr />
        <p>Email</p>
        <span>juanitolopez@correo.com</span>
        <hr />
        <p>RUT</p>
        <span>20.000.000-k</span>
        <hr />
        <p>Teléfono</p>
        <span>+5912345679</span>
        <hr />
        <p>Dirección</p>
        <span>Los Claveles 17, Concepción</span>
        <hr />
        <br />
        <br />
        <button type='button' className='btn btn-danger' onClick={eliminarcuenta}>Eliminar Cuenta</button>
      </div>
    </main>
  )
}

export default InformacionPersonal
