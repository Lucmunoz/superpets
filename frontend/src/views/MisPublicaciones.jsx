import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import PublicacionListada
  from '../components/PublicacionListada'
const MisPublicaciones = () => {
  const navigate = useNavigate()
  useEffect(() => {
    if (window.sessionStorage.getItem('token')) { // <----- ELIMINAR
      // if (!window.sessionStorage.getItem('token')) {
      navigate('/ingresar')
    }
  }, [])

  const cantidadPublicaciones = 1

  const arregloPublicaciones = [{
    id: '123',
    nombre: 'Pelota Respira Fácil',
    descripcion: 'Pelota de diseño especial, similar a una malla, que facilita la respiración y el flujo de aire hacia los pulmones del animal mientras juega',
    precio: 9594,
    imagen: 'https://cdnx.jumpseller.com/bigotes-pet-store-coffee/image/31906761/resize/610/610?1676288218'
  }, {
    id: '1234',
    nombre: 'Hueso Doble Capa',
    descripcion: 'Hueso impregnado con esencia natural de mantequilla de mani. Fabricado con materiales extra resistente que garantiza durabilidad del producto.',
    precio: 15990,
    imagen: 'https://www.petco.cl/medias/?context=bWFzdGVyfGltYWdlc3wyNzE0NDZ8aW1hZ2UvanBlZ3xpbWFnZXMvaDA4L2hkMi85MjU4NjM1NjI0NDc4LmpwZ3xjZTMwZDkyMDgzMGU4YzUxMmFjZjIzYmUzY2E0NzM0ODQzMDY2OTU1NmJmOTU5Yjg5YzAxZjk0ZjIwYWNhMmEy'
  }, {
    id: '12345',
    nombre: 'Harnes Hiking',
    descripcion: 'Arnes que ofrese toda la seguridad que tu mascota necesita para salir paseos largos y evitar que se escape',
    precio: 25990,
    imagen: 'https://www.superzoo.cl/on/demandware.static/-/Sites-SuperZoo-master-catalog/default/dwf12355c9/images/40985-hiking-harness-camuflado-001.jpg'
  }]

  const sinPublicaciones = () => {
    return (
      <>
        <div className='bg-white d-flex flex-column align-items-center justify-content-center'>
          <div>
            <svg aria-hidden='true' clasName='sc-icon__svg' width='165' height='130' viewBox='0 0 165 130' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M108.638 28.4836C98.8041 27.1695 87.1506 29.2481 79.6475 35.8053C71.409 43.0023 64.8352 47.2949 55.7558 49.5746C47.0864 51.7534 30.8066 52.0718 22.1159 62.3364C11.2941 75.1171 18.4525 91.5713 33.8732 102.388C51.105 114.477 83.8567 126.006 113.377 115.205C142.241 104.643 149.097 79.3685 145.916 64.1788C141.505 43.1173 122.094 30.28 108.638 28.4836' fill='black' fill-opacity='0.04' /><rect x='31.1909' y='33.9741' width='108.422' height='79.8172' rx='3.2269' fill='white' /><path d='M32.8044 48.3158H137.999V108.413C137.999 110.492 136.314 112.178 134.235 112.178H36.5691C34.49 112.178 32.8044 110.492 32.8044 108.413V48.3158Z' fill='#EEEEEE' stroke='white' stroke-width='3.2269' /><path d='M139.613 61.6162V64.6928V65.417M31.1909 93.0555V37.201C31.1909 35.4189 32.6357 33.9741 34.4178 33.9741H136.386C138.168 33.9741 139.613 35.4189 139.613 37.201V57.2061M31.1909 97.8508V98.5358V101.818V110.564C31.1909 112.347 32.6357 113.791 34.4178 113.791H136.386C138.168 113.791 139.613 112.347 139.613 110.564V70.641V70.109' stroke='#333333' stroke-width='1.61345' /><path d='M31.191 46.7024H139.613' stroke='#333333' stroke-width='1.61345' /><rect x='103.977' y='95.7021' width='19.3338' height='3.21564' transform='rotate(45 103.977 95.7021)' fill='white' stroke='#333333' stroke-width='1.8298' /><circle cx='85.7812' cy='79.7812' r='25.7811' fill='white' /><circle cx='85.7812' cy='79.7809' r='17.9911' fill='white' stroke='white' stroke-width='3.6596' /><circle cx='85.7812' cy='79.7812' r='25.7811' stroke='#333333' stroke-width='1.8298' /><circle cx='85.7812' cy='79.7809' r='19.8209' stroke='#333333' stroke-width='1.8298' /><rect x='113.624' y='100.664' width='30.231' height='9.84264' rx='2.43973' transform='rotate(45 113.624 100.664)' fill='white' stroke='#333333' stroke-width='1.8298' /><rect x='113.265' y='105.48' width='23.6287' height='2.4741' transform='rotate(45 113.265 105.48)' fill='#EEEEEE' /><ellipse cx='37.3913' cy='40.4318' rx='1.17031' ry='1.12593' fill='#333333' /><ellipse cx='43.6327' cy='40.4318' rx='1.17031' ry='1.12593' fill='#333333' /><ellipse cx='49.8745' cy='40.4318' rx='1.17031' ry='1.12593' fill='#333333' /><path d='M77.2272 88.1223L93.8532 71.852' stroke='#333333' stroke-width='1.61345' /><path d='M93.7863 88.1223L77.1603 71.852' stroke='#333333' stroke-width='1.61345' /></svg>
          </div>
          <div className='d-flex flex-column px-4 pb-4 text-center'>
            <h3>No tienes ninguna publicación</h3>
            <h5 className='pb-4'>Puedes crear una y empezar a vender cuando quieras</h5>
            <button type='button ' className='btn btn-sm btn-secondary me-auto ms-auto' onClick='/'>Crear Publicación</button>
          </div>
        </div>
      </>

    )
  }

  const mostrarPublicaciones = () => {
    return (
      <div className='bg-white d-flex flex-column align-items-center justify-content-center pb-5'>
        <h1 className='p-4'>Mis publicaciones </h1>
        <div className='d-flex flex-column flex-md-row container-fluid align-items-center justify-content-md-end bg-light  py-4 gap-2 gap-md-4'>
          <div className='d-flex flex-column flex-sm-row align-items-center gap-2 '>
            <h5 className='p-0 m-0'>Busqueda</h5>
            <input type='text' id='busqueda-publicaciones' className='form-control fst-italic' placeholder='Título, nombre, precio, etc...' />
          </div>
          <div className='d-flex flex-column flex-sm-row align-items-center gap-2 '>
            <h5 className='p-0 m-0'>Ordenar</h5>
            <select className='form-select fst-italic' aria-label='Default select example'>
              <option value='DEFAULT'>Seleccione...</option>
              <option value='1'>{'Nombre A -> Z'}</option>
              <option value='2'>{'Nombre Z -> A'}</option>
              <option value='3'>Precio Ascendente</option>
              <option value='3'>Precio Descendente</option>
            </select>
          </div>
        </div>
        <div className='container-fluid p-0 pt-3 d-flex flex-column gap-2'>
          {arregloPublicaciones.map((publicacion) => { return (PublicacionListada(publicacion)) })}
        </div>
      </div>
    )
  }

  return (
    <main className='d-flex align-items-center'>
      <div className='container-fluid col-11 col-xl-10 col-xxl-9 my-3 bg-white'>
        {cantidadPublicaciones !== 0 ? mostrarPublicaciones() : sinPublicaciones()}
      </div>
    </main>
  )
}

export default MisPublicaciones
