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
  const cambioInput = (e) => { setNuevoUsuario({ ...nuevoUsuario, [e.target.name]: e.target.value }) }

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
        setNuevoUsuario(usuarioInicial)
        navigate('/perfil')
      })
      .catch(({ response: { data } }) => {
        // console.error(data)
        window.alert(`${data.message} 🙁.`)
        setNuevoUsuario(usuarioInicial)
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
        <h1 className='tituloForm'>Registrate aquí<i className='fa-regular fa-pen-to-square ps-2' /></h1>
        <div className='container-fluid'>
          <form onSubmit={enviarFormulario} className='needs-validation'>
            <div className='mb-3'>
              <label htmlFor='nombre' className='form-label labelEstilos'>Nombre</label>
              <input
                maxLenght='20'
                type='text'
                className='form-control'
                id='nombre'
                placeholder='Ingresa tu Nombre'
                name='nombre'
                value={nuevoUsuario.nombre}
                onChange={cambioInput}
                required
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='apellido' className='form-label labelEstilos'>Apellido</label>
              <input
                maxLenght='20'
                type='text'
                className='form-control'
                id='apellido'
                placeholder='Ingresa tu Apellido'
                name='apellido'
                value={nuevoUsuario.apellido}
                onChange={cambioInput}
                required
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='email' className='form-label labelEstilos'>Email</label>
              <input
                maxLenght='50'
                type='email'
                className='form-control'
                id='email'
                placeholder='Ingresa tu Email'
                aria-describedby='emailHelp'
                name='correo'
                value={nuevoUsuario.correo}
                onChange={cambioInput}
                required
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='password' className='form-label labelEstilos'>Contraseña</label>
              <input
                maxLenght='8'
                type='password'
                className='form-control'
                id='password'
                name='contrasena'
                placeholder='Ingresa 8 caracteres entre letras y numeros'
                value={nuevoUsuario.contrasena}
                onChange={cambioInput}
                required
              />
              <div className='invalid-feedback'>
                Please provide a valid city.
              </div>
            </div>
            <div className='mb-3'>
              <label htmlFor='rut' className='form-label labelEstilos'>RUT</label>
              <input
                maxLenght='12'
                type='text'
                className='form-control'
                placeholder='Sin puntos, con guión y digito verificador'
                id='rut'
                name='rut'
                value={nuevoUsuario.rut}
                onChange={cambioInput}
                required
              />
            </div>
            <label htmlFor='telefono' className='form-label labelEstilos'>Teléfono</label>
            <div className='mb-3 d-flex flex-row container-fluid gap-0 justify-content-center w-75'>
              <div className='input-group-prepend '>
                <span className='input-group-text' id='basic-addon1'>+56</span>
              </div>
              <div className='container-fluid p-0'>
                <input
                  maxLenght='9'
                  type='text'
                  className='form-control m-0 w-100'
                  id='telefono'
                  placeholder='Ingresa tu Teléfono (sólo numeros)'
                  name='telefono'
                  value={nuevoUsuario.telefono}
                  onChange={cambioInput}
                  required
                />
              </div>
            </div>
            <div className='mb-3'>
              <label htmlFor='direccion' className='form-label labelEstilos'>Dirección</label>
              <input
                type='text'
                className='form-control'
                id='direccion'
                placeholder='Ingresa tu Dirección'
                name='direccion'
                value={nuevoUsuario.direccion}
                onChange={cambioInput}
                required
              />
            </div>
            <div className='d-flex flex-column align-items-center fw-lighter text-muted'>
              <span className='fst-italic fs-6 pb-2'>Todos los campos son obligatorios!</span>
              <button type='submit' className='botonEstilos'>Crear cuenta</button>
            </div>

          </form>
        </div>
      </div>
    </main>
  )
}

export default Registrarse
