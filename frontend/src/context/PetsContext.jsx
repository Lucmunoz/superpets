import { createContext, useState, useEffect } from 'react'

export const PetsContext = createContext()

const PetsContextProvider = ({ children }) => {
  const [productos, setProductos] = useState([])
  const [select, setSelect] = useState('az')
  const [busqueda, setBusqueda] = useState('')

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

  const globalState = {
    productos,
    cambiarFavorito,
    select,
    cambiarSelect,
    busqueda,
    cambiarInputBusqueda
  }

  return (
    <PetsContext.Provider value={globalState}>
      {children}
    </PetsContext.Provider>
  )
}

export default PetsContextProvider
