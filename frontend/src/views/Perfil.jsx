import { useNavigate, Link } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import { PetsContext } from '../context/PetsContext'

const Perfil = () => {
  const navigate = useNavigate()
  const [isloading, setIsloading] = useState(true)
  const { cerrarSesion, alertaSweet } = useContext(PetsContext)
  const [nombre, setNombre] = useState('')

  useEffect(() => {
    if (!window.sessionStorage.getItem('token')) {
      navigate('/ingresar')
    } else {
      setNombre(JSON.parse(window.sessionStorage.getItem('usuario')).nombre)
    }
  }, [])

  useEffect(() => {
    if (nombre !== '') {
      setIsloading(false)
    } else {
      setIsloading(true)
    }
  }, [nombre])

  const irACerrar = () => {
    cerrarSesion()
    alertaSweet('info', 'Has cerrado la sesión', '#25D6FE')
  }

  const mostrarData = () => {
    return (

      <div className='container-fluid col-11 col-lg-10 col-xl-8 col-xxl-7 my-3 bg-white bordesRed'>
        <div className='d-flex flex-column flex-md-row container-fluid align-items-center justify-content-center p-0'>
          <div className=' text-center'> <img style={{ height: '220px' }} src='/bienvenida.jpg' alt='Imagen perro dando la bienvenida' /></div>
          <div className='list-group text-center pb-3 pt-md-3'>
            <h1 className='pb-0 fw-bold tituloForm'>¡Bienvenido!</h1>
            <h2 style={{ color: '#ED5C01', paddingBottom: '20px' }}> {nombre}</h2>

            <Link to='/informacionpersonal' className='text-decoration-none'>
              <h2 className='h2PerfilYPersonal'>Información Personal</h2>
              <span className='mb-0 fst-italic text-dark'>Puedes ver y actualizar la información con la que los compradores te contactarán.</span>
            </Link>
            <Link to='/miscompras' className='text-decoration-none border-top border-bottom'>
              <h2 className='h2PerfilYPersonal'>Historial de compras</h2>
              <span className='mb-0 fst-italic text-dark'>Consulta tu historial de compras en nuestra tienda</span>
            </Link>
            <Link to='/mispublicaciones' className='text-decoration-none'>
              <h2 className='h2PerfilYPersonal'>Mis Publicaciones</h2>
              <span className='mb-0 fst-italic text-dark'>Revisa y/o actualiza tus publicaciones.</span>
            </Link>

            <Link to='/' className='link mt-4' onClick={irACerrar}> Cerrar Sesión</Link>

          </div>
        </div>
      </div>
    )
  }

  const mostrarCargando = () => {
    return (
      <div className='align-self-center text-center'>
        <div className='spinner-border' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </div>
      </div>
    )
  }

  return (
    <main className='d-flex align-items-center justify-content-center '>
      {isloading ? mostrarCargando() : mostrarData()}
    </main>
  )
}

export default Perfil
