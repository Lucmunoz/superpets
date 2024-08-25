import { Route, Routes } from 'react-router-dom'
import Menu from './components/Menu'
<<<<<<< HEAD
import { Home, Tienda, Registrarse, Ingresar, Carro, NotFound, Producto, Favoritos } from './views'
=======
import { Home, Tienda, Registrarse, Ingresar, AgregarProducto, NotFound, Producto, Favoritos } from './views'
import Footer from './components/Footer'
>>>>>>> f676adea242d14efd90ab1a56ae9ab4dc4393478

const App = () => {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tienda' element={<Tienda />} />
        <Route path='/tienda/producto/:id' element={<Producto />} />
        <Route path='/registrarse' element={<Registrarse />} />
        <Route path='/ingresar' element={<Ingresar />} />
        {/* rutas protegidas */}
        <Route path='/favoritos' element={<Favoritos />} />
        <Route path='/carrito' element={<Carro />} />
        {/* fin rutas protegidas */}
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}
export default App
