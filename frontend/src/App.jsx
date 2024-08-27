import { Route, Routes } from 'react-router-dom'
import Menu from './components/Menu'

import { Home, Tienda, Registrarse, Carro, NotFound, Producto, Favoritos, InformacionPersonal, MisPublicaciones, Login, Perfil, MisCompras, BuscadorVista, AcercaDeNosotros, PreguntasFrecuentes } from './views'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Menu />
      {/* */}
      {/* */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tienda' element={<Tienda />} />
        <Route path='/tienda/producto/:id' element={<Producto />} />
        <Route path='/registrarse' element={<Registrarse />} />
        {/* rutas protegidas */}
        <Route path='/informacionpersonal' element={<InformacionPersonal />} />
        <Route path='/favoritos' element={<Favoritos />} />
        <Route path='/carrito' element={<Carro />} />
        <Route path='/mispublicaciones' element={<MisPublicaciones />} />
        <Route path='/login' element={<Login />} />
        <Route path='/perfil' element={<Perfil />} />
        <Route path='/miscompras' element={<MisCompras />} />
        <Route path='/buscar' element={<BuscadorVista />} />
        <Route path='/acercadenosotros' element={<AcercaDeNosotros />} />
        <Route path='/preguntasfrecuentes' element={<PreguntasFrecuentes />} />
        {/* fin rutas protegidas */}
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}
export default App
