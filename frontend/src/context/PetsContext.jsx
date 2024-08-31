import { createContext, useState, useEffect } from 'react'

export const PetsContext = createContext()

const PetsContextProvider = ({ children }) => {
  const [productos, setProductos] = useState([])
  const [select, setSelect] = useState('az')
  const [busqueda, setBusqueda] = useState('')
  const [usuario, setUsuario] = useState(null)
  const [arregloMisPublicaciones, setArregloMisPublicaciones] = useState('')
  const [productosCarro, setProductosCarro] = useState([])

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

  const cambiarFavorito = (id) => {
    const nuevosProductos = [...productos]
    const index = nuevosProductos.findIndex((p) => p.id === id)
    nuevosProductos[index].isFavorite = !nuevosProductos[index].isFavorite
    setProductos(nuevosProductos)
  }

  const cambiarSelect = (e) => setSelect(e.target.value)
  const cambiarInputBusqueda = (e) => {
    setBusqueda(e.target.value)
  }

  // función que cambia el estado del usuario, valores permitidos null y  {}
  const cambiarUsuario = (valor) => setUsuario(valor)

  // función que quita 1  al carro
  const agregarCarro = (id) => {
    const nuevoProducto = [...productos].filter((p) => p.id === id)[0]
    setProductosCarro([...productosCarro, nuevoProducto])
  }

  // función que quita 1 del carro
  const quitarCarro = (id) => {
    const carroActual = [...productosCarro]
    console.log(id, 'a eliminar')
    const index = carroActual.findIndex((p) => p.id === id)
    carroActual.splice(index, 1)
    setProductosCarro(carroActual)
  }

  // valor a pagar
  const totalCarro = [...productosCarro].reduce((acumulador, item) => acumulador + item.precio, 0)
  console.log(totalCarro, 'pagar')

  console.log(productosCarro, 'carro actual')
  const globalState = {
    productos,
    cambiarFavorito,
    select,
    cambiarSelect,
    busqueda,
    cambiarInputBusqueda,
    usuario,
    setUsuario,
    cambiarUsuario,
    arregloMisPublicaciones,
    setArregloMisPublicaciones,
    agregarCarro,
    quitarCarro
  }

  return (
    <PetsContext.Provider value={globalState}>
      {children}
    </PetsContext.Provider>
  )
}

export default PetsContextProvider
