import { createContext, useState, useEffect } from 'react'
import { ENDPOINT } from '../config/constants.js'

export const PetsContext = createContext()

const PetsContextProvider = ({ children }) => {
  const [productos, setProductos] = useState([])
  const [select, setSelect] = useState('az')
  const [busqueda, setBusqueda] = useState('')
  const [usuario, setUsuario] = useState(null)
  const [arregloMisPublicaciones, setArregloMisPublicaciones] = useState('')
  const [productosCarro, setProductosCarro] = useState([])
  const [totalCarro, setTotalCarro] = useState(0)
  const [productosFavoritos, setProductosFavoritos] = useState([])
  const [comprasRealizadas, setComprasRealizadas] = useState('')

  const getData = async () => {
    try {
      const response = await fetch(ENDPOINT.home)
      const data = await response.json()
      setProductos(data)
    } catch (error) {
      console.log(error)
    }
  }

  const setearFavoritos = (valor) => { setProductosFavoritos(valor) }
  const setearComprasRealizadas = (valor) => { setComprasRealizadas(valor) }
  const setearProductosCarro = (valor) => { setProductosCarro(valor) }
  const setearMisPublicaciones = (valor) => { setArregloMisPublicaciones(valor) }

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    setTotalCarro(calcularTotal(productosCarro))
    // console.log(totalCarro)
  }, [productosCarro])

  const cambiarSelect = (e) => setSelect(e.target.value)
  const cambiarInputBusqueda = (e) => {
    setBusqueda(e.target.value)
  }

  // función que cambia el estado del usuario, valores permitidos null y  {}
  const cambiarUsuario = (valor) => {
    setUsuario(valor)
    window.sessionStorage.setItem('usuario', JSON.stringify(valor))
  }

  // función que agrega 1 al carro
  const agregarCarro = (id) => {
    let carroTemporal = ''
    let productosCarroTemp = []
    /* Antes de modificar la cantidad del carro, reviso si mi carro existe en el session storage. Esto, ya que el usuario puede haber
        refrescado la pagina y si leyera el estado, estaría vacío. Si existe el session estorage del carro, traigo su valor y seteo
        nuevamente el carro. */
    if (window.sessionStorage.getItem('carro')) {
      productosCarroTemp = JSON.parse(window.sessionStorage.getItem('carro'))
      setProductosCarro(productosCarroTemp)
    }
    // Como recibo el ID de una publicación cuya cantidad debe ser incrementada en 1, reviso si ese id existe en mi carro.
    const objectIndex = productosCarroTemp.findIndex(obj => obj.id === id)
    // si findIndex devuelve un valor valido, quiere decir que producto ya existe en el carro->modifico cantidad
    if (objectIndex !== -1) {
      productosCarroTemp[objectIndex].cantidad += 1
      carroTemporal = productosCarroTemp
      setProductosCarro(productosCarroTemp)
    } else { // si findIndex devuelve un valor -1, quiere decir que producto NO existe en el carro-> Lo agrego con cantidad 1.
      // Agrego la key cantidad y lo agrego al estado arreglo productos carro
      const objectIndex = productos.findIndex(obj => obj.id === id)
      const productoTemporal = productos[objectIndex]
      const productoTemporalConCantidad = { ...productoTemporal, cantidad: 1 }
      // finalmente, seteo el arreglo de productosCarro con el arreglo temporal
      carroTemporal = [...productosCarroTemp, productoTemporalConCantidad]
      setProductosCarro(carroTemporal)
    }
    window.sessionStorage.setItem('carro', JSON.stringify(carroTemporal))
    alert('Producto agregado al carro')
  }

  // función que quita 1 del carro
  const quitarCarro = (id) => {
    // Creo una copia del arreglo de productos que hay en el carro.
    const carroActual = [...productosCarro]
    // En el arreglo, busco el id del elemento a actualizar.
    const index = carroActual.findIndex((p) => p.id === id)
    // si findIndex devuelve un valor valido, quiere decir que producto ya existe en el carro->modifico cantidad
    if (index !== -1) {
      if (carroActual[index].cantidad !== 0) {
        carroActual[index].cantidad -= 1
      }
      // Si la cantidad es 0, tengo que eliminar el producto del arreglo
      if (carroActual[index].cantidad === 0) {
        carroActual.splice(index, 1)
      }
    }
    // finalmente, seteo el arreglo de productosCarro con el arreglo temporal
    setProductosCarro(carroActual)
    window.sessionStorage.setItem('carro', JSON.stringify(carroActual))
  }

  const vaciarCarro = () => {
    setProductosCarro([])
    window.sessionStorage.removeItem('carro')
  }

  const calcularTotal = (array) => {
    if (productosCarro.length === 0) { return 0 } else {
      const valor = array.reduce((acumulator, currentValue) => acumulator + (currentValue.cantidad * currentValue.precio), 0)
      return (valor)
    }
  }
  // numero de productos
  const numeroTotalProductos = () => {
    if (window.sessionStorage.getItem('carro')) {
      return JSON.parse(window.sessionStorage.getItem('carro')).reduce((acumulador, item) => acumulador + item.cantidad, 0)
    } else {
      return 0
    }
  }

  // const numeroTotalProductos =

  // favoritos
  const cambiarFavorito = (id) => {
    // Defino variable que utilizare para almacenar el arreglo de favoritos. A este arreglo, se añadirán o eliminarán favoritos.
    let arregloTemporalFavoritos = []
    // Antes de continuar, reviso si existe un sessionstorage de favoritos. Si existe, lo descargo y actualizo el estado que puede estar vacío luego de un refresh
    if (window.sessionStorage.getItem('favoritos')) {
      arregloTemporalFavoritos = JSON.parse(window.sessionStorage.getItem('favoritos'))
      setProductosFavoritos(arregloTemporalFavoritos)
    }
    // Como recibo el ID de una punlicción que debo agregar al arreglo de favoritos, reviso si ese id existe en mi carro.
    const objectIndex = arregloTemporalFavoritos.findIndex(obj => obj.id === id)
    // Procedo según sea el caso. Si el favorito existe, lo elimino. Si no existe en el arreglo, lo agrego.
    if (objectIndex !== -1) {
      // Si existe, debo removerlo porque ya dejó de ser favrito
      arregloTemporalFavoritos.splice(objectIndex, 1)
    } else {
      // Si no existe, tengo que agregar el objeto del producto en mi arreglo de favoritos. Voy y lo busco en mi matriz de productos y lo copio.
      const objectIndex = productos.findIndex(obj => obj.id === id)
      const productoTemporal = productos[objectIndex]
      arregloTemporalFavoritos.push(productoTemporal)
    }
    // finalmente, seteo mi estado de favoritos (Arreglo de objetos) para desplegarlo en las vistas que lo requieran
    setProductosFavoritos(arregloTemporalFavoritos)
    // Guardo los datos en el sessionstorage
    window.sessionStorage.setItem('favoritos', JSON.stringify(arregloTemporalFavoritos))
  }

  const cerrarSesion = () => {
    // console.log('cierro sesion')
    setUsuario(null)
    setProductosFavoritos([])
    window.sessionStorage.removeItem('token')
    window.sessionStorage.removeItem('usuario')
    window.sessionStorage.removeItem('favoritos')
    window.sessionStorage.removeItem('carro')
  }

  console.log(productos)

  const globalState = {
    productos,
    cambiarFavorito,
    select,
    cambiarSelect,
    busqueda,
    cambiarInputBusqueda,
    usuario,
    cambiarUsuario,
    cerrarSesion,
    arregloMisPublicaciones,
    setearMisPublicaciones,
    agregarCarro,
    quitarCarro,
    productosCarro,
    setearProductosCarro,
    vaciarCarro,
    totalCarro,
    numeroTotalProductos,
    productosFavoritos,
    setearFavoritos,
    comprasRealizadas,
    setearComprasRealizadas
  }

  return (
    <PetsContext.Provider value={globalState}>
      {children}
    </PetsContext.Provider>
  )
}

export default PetsContextProvider
