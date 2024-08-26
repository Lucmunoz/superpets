import { Route, Routes } from 'react-router-dom'
import Menu from './components/Menu'

import { Home, Tienda, Registrarse, Ingresar, Carro, NotFound, Producto, Favoritos, InformacionPersonal } from './views'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Menu />
      {/* */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tienda' element={<Tienda />} />
        <Route path='/tienda/producto/:id' element={<Producto />} />
        <Route path='/registrarse' element={<Registrarse />} />
        <Route path='/ingresar' element={<Ingresar />} />
        {/* rutas protegidas fg */}
        <Route path='/informacionpersonal' element={<InformacionPersonal />} />
        <Route path='/favoritos' element={<Favoritos />} />
        <Route path='/carrito' element={<Carro />} />

        {/* fin rutas protegidas fg */}
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}
export default App
