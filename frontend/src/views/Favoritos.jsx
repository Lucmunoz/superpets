import { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductoFavorito from '../components/ProductoFavorito'
import { PetsContext } from '../context/PetsContext'

const Favoritos = () => {
  const { agregarCarro } = useContext(PetsContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (window.sessionStorage.getItem('token')) { // <----- ELIMINAR
      // if (!window.sessionStorage.getItem('token')) {
      navigate('/ingresar')
    }
  }, [])

  const favElements = 1

  const arreglo = [
    {
      id: '1',
      id_usuarios: '1',
      imagen: 'https://media.milesdefiestas.com/galeria/articulos/disfraz-superman-para-perro_16872_1.jpg',
      nombre: 'Dizfraz para Perro',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti rem facere architecto facilis ratione veniam nostrum, ut autem explicabo perspiciatis!',
      precio: 9990,
      isFavorite: false
    },
    {
      id: '2',
      id_usuarios: '1',
      imagen: 'https://bestforpets.cl/tienda/8990-large_default/pawise-cuerda-nudos.jpg',
      nombre: 'Cuerda para Perro',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti rem facere architecto facilis ratione veniam nostrum, ut autem explicabo perspiciatis!',
      precio: 1990,
      isFavorite: false
    },
    {
      id: '3',
      id_usuarios: '1',
      imagen: 'https://www.superzoo.cl/on/demandware.static/-/Sites-SuperZoo-master-catalog/default/dwecc9797d/images/Nath%20adulto%20Medium%20sabor%20pollo%20y%20arroz%20integral%20alimento%20para%20perros.jpg',
      nombre: 'Alimento para Perro | Nath',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti rem facere architecto facilis ratione veniam nostrum, ut autem explicabo perspiciatis!',
      precio: 20990,
      isFavorite: false
    },
    {
      id: '4',
      id_usuarios: '1',
      imagen: 'https://www.tusmascotas.cl/wp-content/uploads/2020/10/easy-clean-limon-2.jpg.webp',
      nombre: 'Arena para Gatos | Easy Clean',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti rem facere architecto facilis ratione veniam nostrum, ut autem explicabo perspiciatis!',
      precio: 8990,
      isFavorite: false
    },
    {
      id: '5',
      id_usuarios: '1',
      imagen: 'https://www.clubdeperrosygatos.cl/wp-content/uploads/2024/07/prlotas-gato.webp',
      nombre: 'Pelota para Gatos',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti rem facere architecto facilis ratione veniam nostrum, ut autem explicabo perspiciatis!',
      precio: 1590,
      isFavorite: false
    },
    {
      id: '6',
      id_usuarios: '2',
      imagen: 'https://pethome.cl/media/catalog/product/cache/a207c3d3261251c19bb31d3774d0e54e/5/1/5162__28311.jpg',
      nombre: 'Túnel para Gatos',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti rem facere architecto facilis ratione veniam nostrum, ut autem explicabo perspiciatis!',
      precio: 15990,
      isFavorite: false
    },
    {
      id: '7',
      id_usuarios: '2',
      imagen: 'https://dojiw2m9tvv09.cloudfront.net/42482/product/canish-hipoalergenicop0404.jpg',
      nombre: 'Shampoo Hipoalergénico',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti rem facere architecto facilis ratione veniam nostrum, ut autem explicabo perspiciatis!',
      precio: 4990,
      isFavorite: false
    },
    {
      id: '8',
      id_usuarios: '2',
      imagen: 'https://dojiw2m9tvv09.cloudfront.net/42482/product/tidy-gato4433.jpg',
      nombre: 'Shampoo en seco para Gatos',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti rem facere architecto facilis ratione veniam nostrum, ut autem explicabo perspiciatis!',
      precio: 5990,
      isFavorite: false
    },
    {
      id: '9',
      id_usuarios: '2',
      imagen: 'https://www.clubdeperrosygatos.cl/wp-content/uploads/2017/10/Royal-Canin-Kitten.webp',
      nombre: 'Alimento para Gatos | Royal',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti rem facere architecto facilis ratione veniam nostrum, ut autem explicabo perspiciatis!',
      precio: 17990,
      isFavorite: false
    },
    {
      id: '10',
      id_usuarios: '2',
      imagen: 'https://http2.mlstatic.com/D_NQ_NP_841472-MLC48830750531_012022-O.webp',
      nombre: 'Alimento para Catitas',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti rem facere architecto facilis ratione veniam nostrum, ut autem explicabo perspiciatis!',
      precio: 3990,
      isFavorite: false
    }

  ]

  const sinFavoritos = () => {
    return (
      <>
        <div className='bg-white d-flex flex-column align-items-center justify-content-center'>
          <div>
            <img style={{ height: '200px' }} src='/Perro-triste.jpg' alt='Imagen perro triste' />
          </div>
          <div className='d-flex flex-column px-4 pb-4 text-center'>
            <h3>No tienes producto Favoritos</h3>
            <h5 className='pb-4'>No pierdas mas tiempo. revisa nuestra amplia oferta de productos para tu mascota!</h5>
            <button type='button ' className='btn btn-sm btn-secondary me-auto ms-auto' onClick='/'>Ver productos</button>
          </div>
        </div>
      </>
    )
  }

  const mostrarDataFavoritos = () => {
    return (
      <div className='d-flex flex-column py-5'>
        <h1 className='text-center pb-3'>Mis Favoritos <i className='fa-solid fa-cart-shopping' /></h1>
        <div className='d-flex flex-column p-0 px-3'>
          {arreglo.map((producto) => {
            return (
              <div className='container-fluid bg-light p-0' key={producto.id}>
                <div className='row'>
                  <div className='col-3 col-sm-2 p-0 '>
                    <div className='text-center'>
                      <img className='' style={{ height: '70px' }} src={producto.imagen} alt='MDN' />
                    </div>
                  </div>
                  <div className='col-9 col-lg-5 col-xl-6 d-flex flex-column justify-content-center p-0'>
                    <h6 className='p-0 m-0'>{producto.nombre}</h6>
                    <div className='text-truncate fst-italic fw-light text-muted'>
                      {producto.descripcion}
                    </div>
                  </div>
                  <div className='d-flex col-lg-4 gap-2 justify-content-center align-items-center p-0 py-2 ms-auto'>
                    <button type='button' className='btn btn-sm btn-secondary'>Ver producto</button>
                    <button type='button' className='btn btn-sm btn-danger' onClick={() => agregarCarro(producto.id)}>Añadir al carro</button>
                    <button type='button' className='btn btn-sm btn-danger'>Eliminar</button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <ProductoFavorito />
      </div>
    )
  }

  return (
    <main className='d-flex align-items-center'>
      <div className='container-fluid col-11 col-xl-10 col-xxl-9 my-3 bg-white'>
        {
          favElements !== 0 ? mostrarDataFavoritos() : sinFavoritos()
        }
      </div>
    </main>
  )
}

export default Favoritos
