import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ENDPOINT } from '../config/constants.js'

const Registrarse = () => {
  const usuarioInicial = {
    nombre: '',
    apellido: '',
    correo: '',
    contrasena: '',
    rut: '',
    telefono: '',
    direccion: ''
  }

  const [nuevoUsuario, setNuevoUsuario] = useState(usuarioInicial)
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  const navigate = useNavigate()
  const cambioInput = (e) => setNuevoUsuario({ ...nuevoUsuario, [e.target.name]: e.target.value })

  const enviarFormulario = (e) => {
    e.preventDefault()

    if (nuevoUsuario.nombre.trim() === '' ||
    nuevoUsuario.apellido.trim() === '' ||
    nuevoUsuario.correo.trim() === '' ||
    nuevoUsuario.contrasena.trim() === '' ||
    nuevoUsuario.rut.trim() === '' ||
    nuevoUsuario.telefono.trim() === '' ||
    nuevoUsuario.direccion.trim() === '') {
      return window.alert('Campos vacíos')
    }

    if (!emailRegex.test(nuevoUsuario.correo)) {
      return window.alert('El formato del email ingresado no es correcto!')
    }

    if (nuevoUsuario.contrasena.length !== 8) {
      return window.alert('La contraseña debe ser de 8 caracteres')
    }

    axios.post(ENDPOINT.registrarse, nuevoUsuario)
      .then(({ data }) => {
        window.alert(`${data.message} 😀.`)
        navigate('/perfil')
      })
      .catch(({ response: { data } }) => {
        console.error(data)
        window.alert(`${data.message} 🙁.`)
      })
  }

  useEffect(() => {
    if (window.sessionStorage.getItem('token')) {
      navigate('/perfil')
    }
  }, [])

  return (
    <main>
      <div className='divRegistroNuevo'>
        <h1>Registrate aquí<i className='fa-regular fa-pen-to-square ps-2' /></h1>
        <form onSubmit={enviarFormulario}>
          <div className='mb-3'>
            <label htmlFor='nombre' className='form-label mb-0'>Nombre</label>
            <input
              type='text'
              className='form-control'
              id='nombre'
              name='nombre'
              value={nuevoUsuario.nombre}
              onChange={cambioInput}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='apellido' className='form-label mb-0'>Apellido</label>
            <input
              type='text'
              className='form-control'
              id='apellido'
              name='apellido'
              value={nuevoUsuario.apellido}
              onChange={cambioInput}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='email' className='form-label mb-0'>Email</label>
            <input
              type='email'
              className='form-control'
              id='email'
              aria-describedby='emailHelp'
              name='correo'
              value={nuevoUsuario.correo}
              onChange={cambioInput}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='password' className='form-label mb-0'>Contraseña (8 caracteres)</label>
            <input
              type='password'
              className='form-control'
              id='password'
              name='contrasena'
              value={nuevoUsuario.contrasena}
              onChange={cambioInput}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='rut' className='form-label mb-0'>RUT</label>
            <input
              type='text'
              className='form-control'
              id='rut'
              name='rut'
              value={nuevoUsuario.rut}
              onChange={cambioInput}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='telefono' className='form-label mb-0'>Teléfono</label>
            <input
              type='text'
              className='form-control'
              id='telefono'
              name='telefono'
              value={nuevoUsuario.telefono}
              onChange={cambioInput}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='direccion' className='form-label mb-0'>Dirección</label>
            <input
              type='text'
              className='form-control'
              id='direccion'
              name='direccion'
              value={nuevoUsuario.direccion}
              onChange={cambioInput}
            />
          </div>
          <button type='submit' className='btn btn-danger'>Crear cuenta</button>
        </form>
      </div>
    </main>
  )
}

export default Registrarse
