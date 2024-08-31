import { createContext, useState, useEffect } from 'react'

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

  const getData = async () => {
    try {
      const response = await fetch('/productos.json')
      const data = await response.json()
      setProductos(data)
    } catch (error) {
      console.log(error)
    }
  }

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

  const cerrarSesion = () => {
    // console.log('cierro sesion')
    setUsuario(null)
    window.sessionStorage.removeItem('usuario')
  }

  // función que agrega 1 al carro
  const agregarCarro = (id) => {
    // Creo una copia del arreglo de productos que hay en el carro.
    const productosCarroTemp = [...productosCarro]
    // En el arreglo, busco el id del elemento a actualizar.
    const objectIndex = productosCarro.findIndex(obj => obj.id === id)
    // si findIndex devuelve un valor valido, quiere decir que producto ya existe en el carro->modifico cantidad
    if (objectIndex !== -1) {
      productosCarroTemp[objectIndex].cantidad += 1
      setProductosCarro(productosCarroTemp)
    } else { // si findIndex devuelve un valor invalido (-1), quiere decir que producto NO existe en el carro-> Lo agrego con cantidad 1.
      // Agrego la key cantidad y lo agrego al estado arreglo productos carro
      const productoTemporal = productos[+id - 1]
      const productoTemporalConCantidad = { ...productoTemporal, cantidad: 1 }
      // finalmente, seteo el arreglo de productosCarro con el arreglo temporal
      setProductosCarro([...productosCarro, productoTemporalConCantidad])
    }
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
  }

  const calcularTotal = (array) => {
    if (productosCarro.length === 0) { return 0 } else {
      const valor = array.reduce((acumulator, currentValue) => acumulator + (currentValue.cantidad * currentValue.precio), 0)
      return (valor)
    }
  }
  // numero de productos
  const numeroTotalProductos = [...productosCarro].reduce((acumulador, item) => acumulador + item.cantidad, 0)

  // favoritos
  const cambiarFavorito = (id) => {
    const copiaParaFav = [...productos]
    const index = copiaParaFav.findIndex((p) => p.id === id)
    copiaParaFav[index].isFavorite = !copiaParaFav[index].isFavorite
    const soloFavoritos = copiaParaFav.filter((p) => p.isFavorite === true)
    setProductosFavoritos(soloFavoritos)
  }

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
    setArregloMisPublicaciones,
    agregarCarro,
    quitarCarro,
    productosCarro,
    totalCarro,
    numeroTotalProductos,
    productosFavoritos
  }

  return (
    <PetsContext.Provider value={globalState}>
      {children}
    </PetsContext.Provider>
  )
}

export default PetsContextProvider
