import { useState } from 'react'

const credencialesUsuario = {
  correo: '',
  contrasena: ''
}
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

const Login = () => {
  const [user, setUser] = useState(credencialesUsuario)
  const handleUser = (event) => setUser({ ...user, [event.target.name]: event.target.value })

  const handleForm = (event) => {
    event.preventDefault()

    if (!user.correo.trim() || !user.contrasena.trim()) {
      return window.alert('Email y password obligatorias.')
    }

    if (!emailRegex.test(user.correo)) {
      return window.alert('El formato del email no es correcto!')
    }
  }

  return (
    <main className='d-flex align-items-center'>
      <div className='container col-10 col-lg-5 text-center bg-white py-3'>
        <h2 className='pb-2'>Inicio de sesión</h2>
        <form onSubmit={handleForm}>
          <div class='mb-3 px-4'>
            <label class='form-label'>Correo electrónico</label>
            <input type='email' name='correo' className='form-control text-center' id='exampleInputEmail1' aria-describedby='emailHelp' placeholder='Correo electrónico de registro' value={user.correo} onChange={handleUser} />
            <div id='emailHelp' className='form-text fst-italic'>Nunca compartiremos tu correo.</div>
          </div>
          <div class='mb-3 px-4'>
            <label className='form-label'>Contraseña</label>
            <input type='password' name='contrasena' className='form-control text-center' id='exampleInputPassword1' placeholder='*********' value={user.contrasena} onChange={handleUser} />
          </div>
          <button type='submit' className='btn btn-primary'>Iniciar Sesión</button>
        </form>
      </div>
    </main>
  )
}

export default Login
