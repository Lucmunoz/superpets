// import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'
import { PetsContext } from '../context/PetsContext'
// import { ENDPOINT } from '../config/constans'

const credencialesUsuario = {
  correo: '',
  contrasena: ''
}
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

const Login = () => {
  const navigate = useNavigate()
  const [userTemp, setUserTemp] = useState(credencialesUsuario)
  const { setUsuario } = useContext(PetsContext)
  const handleUser = (event) => setUserTemp({ ...userTemp, [event.target.name]: event.target.value })

  const handleForm = (event) => {
    event.preventDefault()

    if (!userTemp.correo.trim() || !userTemp.contrasena.trim()) {
      return window.alert('Email y password obligatorias.')
    }

    if (!emailRegex.test(userTemp.correo)) {
      return window.alert('El formato del email no es correcto!')
    }
    /* Reemplazar codigo al iniciar sesión para obtener token */
    /* axios.post(ENDPOINT.login, user)
      .then(({ data }) => {
        window.sessionStorage.setItem('token', data.token)
        window.alert('Usuario identificado con éxito 😀.')
        setUsuario({})
        navigate('/perfil')
      })
      .catch(({ response: { data } }) => {
        console.error(data)
        window.alert(`${data.message} 🙁.`)
      }) */
    const usuarioTemporal = {
      id: '1',
      nombre: 'lucas'
    }

    setUsuario(usuarioTemporal)
    navigate('/perfil')
  }

  return (
    <main className='d-flex align-items-center'>
      <div className='container col-10 col-lg-5 text-center bg-white py-3'>
        <h2 className='pb-2'>Inicio de sesión</h2>
        <form onSubmit={handleForm}>
          <div className='mb-3 px-4'>
            <label className='form-label'>Correo electrónico</label>
            <input type='email' name='correo' className='form-control text-center' id='exampleInputEmail1' aria-describedby='emailHelp' placeholder='Correo electrónico de registro' value={userTemp.correo} onChange={handleUser} />
            <div id='emailHelp' className='form-text fst-italic'>Nunca compartiremos tu correo.</div>
          </div>
          <div className='mb-3 px-4'>
            <label className='form-label'>Contraseña</label>
            <input type='password' name='contrasena' className='form-control text-center' id='exampleInputPassword1' placeholder='*********' value={userTemp.contrasena} onChange={handleUser} />
          </div>
          <button type='submit' className='btn btn-primary'>Iniciar Sesión</button>
        </form>
      </div>
    </main>
  )
}

export default Login
