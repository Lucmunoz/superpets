import { useContext, useEffect } from 'react'
import { PetsContext } from '../context/PetsContext'
import { useNavigate, Link } from 'react-router-dom'
import ProductoCompras from '../components/ProductoCompras'

const MisCompras = () => {
  const { setearComprasRealizadas, comprasRealizadas } = useContext(PetsContext)
  const navigate = useNavigate()

  const arregloComprasUsuario =
    [{
      idCompra: 1,
      total: 35250,
      fecha: '24-05-2014',
      productos: [{
        id: '1',
        id_usuarios: '1',
        imagen: 'https://media.milesdefiestas.com/galeria/articulos/disfraz-superman-para-perro_16872_1.jpg',
        nombre: 'Disfraz para Perro',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti rem facere architecto facilis ratione veniam nostrum, ut autem explicabo perspiciatis!',
        precio: 9990,
        cantidad: 2
      }, {
        id: '6',
        id_usuarios: '2',
        imagen: 'https://pethome.cl/media/catalog/product/cache/a207c3d3261251c19bb31d3774d0e54e/5/1/5162__28311.jpg',
        nombre: 'Túnel para Gatos',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti rem facere architecto facilis ratione veniam nostrum, ut autem explicabo perspiciatis!',
        precio: 15990,
        cantidad: 4
      }, {
        id: '3',
        id_usuarios: '1',
        imagen: 'https://www.superzoo.cl/on/demandware.static/-/Sites-SuperZoo-master-catalog/default/dwecc9797d/images/Nath%20adulto%20Medium%20sabor%20pollo%20y%20arroz%20integral%20alimento%20para%20perros.jpg',
        nombre: 'Alimento para Perro | Nath',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti rem facere architecto facilis ratione veniam nostrum, ut autem explicabo perspiciatis!',
        precio: 20990,
        cantidad: 1
      }]
    }, {
      idCompra: 2,
      total: 16990,
      fecha: '05-07-2020',
      productos: [{
        id: '5',
        id_usuarios: '1',
        imagen: 'https://www.clubdeperrosygatos.cl/wp-content/uploads/2024/07/prlotas-gato.webp',
        nombre: 'Pelota para Gatos',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti rem facere architecto facilis ratione veniam nostrum, ut autem explicabo perspiciatis!',
        precio: 1590,
        cantidad: 1
      }, {
        id: '8',
        id_usuarios: '2',
        imagen: 'https://dojiw2m9tvv09.cloudfront.net/42482/product/tidy-gato4433.jpg',
        nombre: 'Shampoo en seco para Gatos',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti rem facere architecto facilis ratione veniam nostrum, ut autem explicabo perspiciatis!',
        precio: 5990,
        cantidad: 2
      }]
    },
    {
      idCompra: 3,
      total: 14990,
      fecha: '02-04-1989',
      productos: [{
        id: '3',
        id_usuarios: '1',
        imagen: 'https://www.superzoo.cl/on/demandware.static/-/Sites-SuperZoo-master-catalog/default/dwecc9797d/images/Nath%20adulto%20Medium%20sabor%20pollo%20y%20arroz%20integral%20alimento%20para%20perros.jpg',
        nombre: 'Alimento para Perro | Nath',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti rem facere architecto facilis ratione veniam nostrum, ut autem explicabo perspiciatis!',
        precio: 20990,
        cantidad: 6
      }]
    },
    {
      idCompra: 4,
      total: 5200,
      fecha: '02-07-2024',
      productos: [{
        id: '2',
        id_usuarios: '1',
        imagen: 'https://bestforpets.cl/tienda/8990-large_default/pawise-cuerda-nudos.jpg',
        nombre: 'Cuerda para Perro',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti rem facere architecto facilis ratione veniam nostrum, ut autem explicabo perspiciatis!',
        precio: 1990,
        cantidad: 1
      }]
    }]

  const getData = () => {
    /* El siguiente codigo se debe reemplazar por aquel que realice el llamado al backend y obtenga la data de las compras del usuario */
    setearComprasRealizadas(arregloComprasUsuario)
  }

  useEffect(() => {
    /* //Código para verificar existencia de token. De lo contrario, redirigir a ingresar
     if (!window.sessionStorage.getItem('token')) {navigate('/ingresar')} */

    /* *Reemplazar codigo cuando se realice backend***/
    if (!window.sessionStorage.getItem('usuario')) {
      navigate('/ingresar')
    }
    getData()
    /* *Reemplazar codigo cuando se realice backend***/
  }, [])

  const mostrarDataCompras = () => {
    return (
      <div className='bg-white d-flex flex-column'>
        <h1 className='tituloForm'>Mis Compras <i className='fa-solid fa-bag-shopping' /></h1>
        <ProductoCompras />
        <div style={{ textAlign: 'center' }}>
          <button type='button' className='botonEstilos'> <Link to='/perfil' className='text-white text-decoration-none'>Regresar</Link> </button>
        </div>
      </div>
    )
  }

  const sinCompras = () => {
    return (
      <div className='p-4 bg-white d-flex flex-row justify-content-center align-items-center'>
        <div><img className='img-fluid' src='/carrovacio.jpg' alt='Imagen carro vacío' /></div>
        <div className='d-flex flex-column p-4 text-center'>
          <h1>Hey!</h1>
          <h3>Aún no has visto nuestras ofertas?</h3>
          <h5 className=''>No pierdas mas tiempo, hay increibles descuento esperando! Ellos, lo merecen!</h5>
          <button type='button' className='btn btn-secondary col-4 me-auto ms-auto'>Ver Productos</button>
        </div>
      </div>
    )
  }

  return (
    <main className='d-flex align-items-center'>
      <div className='container-fluid col-10 bg-white bordesRed'>
        {comprasRealizadas.length !== 0 ? mostrarDataCompras() : sinCompras()}
      </div>
    </main>
  )
}

export default MisCompras
