import { useState } from 'react'

const Registrarse = () => {
  const usuarioInicial = {
    nombreUsuario: '',
    apellidoUsuario: '',
    emailUsuario: '',
    passwordUsuario: '',
    rutUsuario: '',
    telefonoUsuario: '',
    direccionUsuario: ''
  }

  const [usuario, setUsuario] = useState(usuarioInicial)
  const cambioInput = (e) => {
    console.log(e.target.name)
  }

  return (
    <main className='mainPersonal'>
      <div className='divFormPersonal'>
        <h1>Registro nuevo usuario</h1>
        <form>
          <div className='mb-3'>
            <label htmlFor='nombre' className='form-label mb-0'>Nombre</label>
            <input
              type='text'
              className='form-control'
              id='nombre'
              name='nombreUsuario'
              value={usuario.nombreUsuario}
              onChange={cambioInput}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='apellido' className='form-label mb-0'>Apellido</label>
            <input
              type='text'
              className='form-control'
              id='apellido'
              name='apellidoUsuario'
              value={usuario.apellidoUsuario}
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
              name='emailUsuario'
              value={usuario.emailUsuario}
              onChange={cambioInput}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='password' className='form-label mb-0'>Password</label>
            <input
              type='password'
              className='form-control'
              id='password'
              name='passwordUsuario'
              value={usuario.passwordUsuario}
              onChange={cambioInput}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='rut' className='form-label mb-0'>RUT</label>
            <input
              type='text'
              className='form-control'
              id='rut'
              name='rutUsuario'
              value={usuario.rutUsuario}
              onChange={cambioInput}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='telefono' className='form-label mb-0'>Teléfono</label>
            <input
              type='text'
              className='form-control'
              id='telefono'
              name='telefonoUsuario'
              value={usuario.telefonoUsuario}
              onChange={cambioInput}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='direccion' className='form-label mb-0'>Dirección</label>
            <input
              type='text'
              className='form-control'
              id='direccion'
              name='direccionUsuario'
              value={usuario.direccionUsuario}
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
