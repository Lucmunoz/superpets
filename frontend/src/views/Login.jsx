// import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState, useContext, useEffect } from 'react'
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
  const { cambiarUsuario } = useContext(PetsContext)
  const handleUser = (event) => setUserTemp({ ...userTemp, [event.target.name]: event.target.value })

  useEffect(() => {
    if (window.sessionStorage.getItem('usuario')) { // <----- ELIMINAR
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
    cambiarUsuario(usuarioTemporal)
    navigate('/perfil')
  }

  return (
    <main className='d-flex align-items-center'>
      <div className='container col-10 col-lg-5 text-center bg-white bordesRed' style={{ width: '600px' }}>
        <h1 className='tituloForm'>Inicio de sesión</h1>
        <form onSubmit={handleForm}>
          <div className='mb-3 px-4'>
            <label htmlFor='exampleInputEmail1' className='form-label labelEstilos'>Correo electrónico</label>
            <input style={{ width: '85%', margin: '0 auto' }} type='email' name='correo' className='form-control text-center' id='exampleInputEmail1' aria-describedby='emailHelp' placeholder='Correo electrónico de registro' value={userTemp.correo} onChange={handleUser} />
            <div id='emailHelp' className='form-text fst-italic'>Nunca compartiremos tu correo.</div>
          </div>
          <div className='mb-3 px-4'>
            <label htmlFor='exampleInputPassword1' className='form-label labelEstilos'>Contraseña</label>
            <input style={{ width: '85%', margin: '0 auto' }} type='password' name='contrasena' className='form-control text-center' id='exampleInputPassword1' placeholder='*********' value={userTemp.contrasena} onChange={handleUser} />
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
