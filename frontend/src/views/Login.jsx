// import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState, useContext, useEffect } from 'react'
import { PetsContext } from '../context/PetsContext'
import { ENDPOINT } from '../config/constants.js'
import axios from 'axios'

const credencialesUsuario = {
  correo: '',
  contrasena: ''
}
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

const Login = () => {
  const navigate = useNavigate()
  const [userTemp, setUserTemp] = useState(credencialesUsuario)
  const { cambiarUsuario, alertaSweet } = useContext(PetsContext)

  const handleUser = (event) => setUserTemp({ ...userTemp, [event.target.name]: event.target.value })

  useEffect(() => {
    if (window.sessionStorage.getItem('usuario')) { // <----- ELIMINAR ??
      // usuario logeado
      navigate('/perfil')
    }

    if (window.sessionStorage.getItem('favoritos')) { // <----- ELIMINAR
      window.sessionStorage.removeItem('favoritos')
    }
    if (window.sessionStorage.getItem('carro')) { // <----- ELIMINAR
      window.sessionStorage.removeItem('carro')
    }
  }, [])

  const handleForm = (event) => {
    event.preventDefault()

    if (!userTemp.correo.trim() || !userTemp.contrasena.trim()) {
      return alertaSweet('warning', 'Email y password obligatorias', '#FF0000')
    }

    if (!emailRegex.test(userTemp.correo)) {
      return alertaSweet('warning', 'El formato del email no es correcto!', '#FF0000')
    }

    /* Al iniciar sesión para obtener token */
    axios.post(ENDPOINT.login, userTemp)
      .then(({ data }) => {
        window.sessionStorage.setItem('token', data.token)
        cambiarUsuario({ id: data.id, nombre: data.nombre })
        window.sessionStorage.setItem('usuario', JSON.stringify({ id: data.id, nombre: data.nombre }))
        alertaSweet('success', data.message, '#8EC63D')
        navigate('/perfil')
      })
      .catch(({ response: { data } }) => {
        console.error(data)
        alertaSweet('error', data.message, '#FF0000')
      })

    navigate('/perfil')
  }

  return (
    <main className='d-flex align-items-center'>
      <div className='container text-center bordesRed containerLogin'>
        <h1 className='tituloForm'>Inicio de sesión</h1>
        <form onSubmit={handleForm}>
          <div className='mb-3 px-4'>
            <label htmlFor='exampleInputEmail1' className='form-label labelEstilos'>Correo electrónico</label>
            <input type='email' name='correo' className='form-control text-center' id='exampleInputEmail1' aria-describedby='emailHelp' placeholder='Correo electrónico de registro' value={userTemp.correo} onChange={handleUser} />
            <div id='emailHelp' className='form-text fst-italic'>Nunca compartiremos tu correo.</div>
          </div>
          <div className='mb-3 px-4'>
            <label htmlFor='exampleInputPassword1' className='form-label labelEstilos'>Contraseña</label>
            <input maxlength='9' type='password' name='contrasena' className='form-control text-center' id='exampleInputPassword1' placeholder='*********' value={userTemp.contrasena} onChange={handleUser} />
          </div>
          <div>
            <button type='submit' className='botonEstilos'>Iniciar Sesión</button>
          </div>
        </form>
      </div>
    </main>
  )
}

export default Login
