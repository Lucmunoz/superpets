import { Route, Routes } from 'react-router-dom'
import Menu from './components/Menu'

import { Home, Tienda, Registrarse, Carro, NotFound, Producto, Favoritos, InformacionPersonal, MisPublicaciones, Login, Perfil, MisCompras, BuscadorVista, AcercaDeNosotros, PreguntasFrecuentes, CrearPublicacion, ActualizarPublicacion } from './views'
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
        <Route path='/ingresar' element={<Login />} />
        <Route path='/buscar' element={<BuscadorVista />} />
        <Route path='/acercadenosotros' element={<AcercaDeNosotros />} />
        <Route path='/preguntasfrecuentes' element={<PreguntasFrecuentes />} />
        {/* rutas protegidas */}
        <Route path='/perfil' element={<Perfil />} />
        <Route path='/informacionpersonal' element={<InformacionPersonal />} />
        <Route path='/favoritos' element={<Favoritos />} />
        <Route path='/carrito' element={<Carro />} />
        <Route path='/mispublicaciones' element={<MisPublicaciones />} />
        <Route path='/miscompras' element={<MisCompras />} />
        <Route path='/crearpublicacion' element={<CrearPublicacion />} />
        <Route path='/actualizarpublicacion/:id' element={<ActualizarPublicacion />} />
        {/* fin rutas protegidas */}
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}
export default App
