import { NavLink, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Perfil = () => {
  const navigate = useNavigate()
  const [isloading, setIsloading] = useState(true)
  const [nombre, setNombre] = useState('')

  const getUserData = () => {
    /* Reemplazar codigo para obtener el nombre del usuario haciendo la consulta a la Db. */

    /* const token = window.sessionStorage.getItem('token')
    axios.get(ENDPOINT.users, { headers: { Authorization: `Bearer ${token}` } })
      .then(({ data: [user] }) => setDeveloper({ ...user }))
      .catch(({ response: { data } }) => {
        console.error(data)
        window.sessionStorage.removeItem('token')
        setNombre('nombre_usuario')
      }) */

    setNombre('nombre_usuario')
  }

  useEffect(() => {
    if (!window.sessionStorage.getItem('token')) {
      navigate('/ingresar')
    }
    getUserData()
  }, [])

  useEffect(() => {
    if (nombre !== '') {
      setIsloading(false)
    } else {
      setIsloading(true)
    }
  }, [nombre])

  const mostrarData = () => {
    return (

      <div className='container-fluid col-11 col-lg-10 col-xl-8 col-xxl-7 my-3 bg-white'>
        <div className='d-flex flex-column flex-md-row container-fluid align-items-center justify-content-center p-0'>
          <div className=' text-center'> <img style={{ height: '220px' }} src='/bienvenida.jpg' alt='Imagen perro dando la bienvenida' /></div>
          <div className='list-group text-center pb-3 pt-md-3'>
            <h3 className='pb-3 fw-bold'>Bienvenido {nombre}!</h3>

            <NavLink to='/informacionpersonal' className='text-decoration-none'>
              <div className='d-flex flex-column text-decoration-none text-center list-group-item list-group-item-action border-0 p-0 py-2 w-100 justify-content-center'>
                <h5 className='mb-1'>Información Personal</h5>
                <p className='mb-0 fst-italic text-muted'>Puedes ver y actualizar la información con la que los compradores te contactarán.</p>
              </div>
            </NavLink>
            <NavLink to='/miscompras' className='text-decoration-none border-top border-bottom'>
              <div className='d-flex flex-column text-decoration-none text-center list-group-item list-group-item-action border-0 p-0 py-2 w-100 justify-content-center'>
                <h5 className='mb-1'>Historial de compras</h5>
                <p className='mb-0 fst-italic text-muted'>Consulta tu historial de compras en nuestra tienda</p>
              </div>
            </NavLink>
            <NavLink to='/mispublicaciones' className='text-decoration-none'>
              <div className='d-flex flex-column text-decoration-none text-center list-group-item list-group-item-action border-0 p-0 py-2 w-100 justify-content-center'>
                <h5 className='mb-1'>Mis Publicacionesl</h5>
                <p className='mb-0 fst-italic text-muted'>Revisa y/o actualiza tus publicaciones.</p>
              </div>
            </NavLink>

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
