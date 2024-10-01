import express, { response } from 'express'
import cors from 'cors'
import { traerProductos, registrarUsuario, verificarCredenciales, getUser, verificarUsuarioExiste, eliminarUsuario, crearPublicacion, traerMisPublicaciones, crearRegistroCompra, traerMisCompras, actualizarProducto, eliminarPublicacion, traerPublicacionPorID } from './models/modelsUser.js'
import { jwtDecode, jwtSign } from '../utils/auth/jwt.js'
import { authToken } from '../server/midlewares/auth.midlewares.js'
import morgan from 'morgan'

const app = express()
const PORT = process.env.PORT ?? 3000
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.listen(PORT, () => console.log('Server UP!'))

// OK = registra un nuevo usuario-OK
app.post('/registrarse', async (req, res) => {
  try {
    const { nombre, apellido, correo, contrasena, rut, telefono, direccion } = req.body
    await verificarUsuarioExiste(correo, rut)
    await registrarUsuario({ nombre, apellido, correo, contrasena, rut, telefono, direccion })
    res.status(200).json({ message: 'Te haz registrado con éxito en superpets.cl' })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// OK= trae todos los productos-Ok
app.get('/', async (req, res) => {
  try {
    const productos = await traerProductos()
    res.status(200).json(productos)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// OK= trae todos los productos -ok
app.get('/tienda', async (req, res) => {
  try {
    const productos = await traerProductos()
    res.status(200).json(productos)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// OK = POST /login recibe las credenciales de un usuario, si esta ok -->devuelve un token generado con JWT, usuarioId y nombre
app.post('/login', async (req, res) => {
  try {
    const { correo, contrasena } = req.body
    const { id, nombre } = await verificarCredenciales(correo, contrasena)
    const token = jwtSign({ id, correo })
    res.status(200).json({ token, id, nombre, message: 'Haz ingresado con éxito' })
  } catch (error) {
    console.log(error)
    res.status(error.code).json({ message: error.message })
  }
})

// para traer data de usuario
app.get('/usuario', authToken, async (req, res) => {
  try {
    const authorization = req.header('Authorization')
    const [, token] = authorization.split(' ')
    const { correo } = jwtDecode(token)
    const usuario = await getUser(correo)
    res.status(200).json(usuario)
  } catch (error) {
    res.status(error.code).json({ error })
  }
})

// para eliminar cuenta, elimina también todos los productos asociados al usuario
app.delete('/usuario', authToken, async (req, res) => {
  try {
    const authorization = req.header('Authorization')
    const [, token] = authorization.split(' ')
    const { correo } = jwtDecode(token)
    await eliminarUsuario(correo)
    res.status(200).json({ message: 'Usuario eliminado con éxito' })
  } catch (error) {
    res.status(error.code).json({ message: error.message })
  }
})

/** ******CREACIÓN DE NUEVA PUBLICACIÓN**********/
app.post('/tienda/producto', authToken, async (req, res) => {
  const { nombre, descripcion, precio, imagen } = req.body
  try {
    const authorization = req.header('Authorization')
    const [, token] = authorization.split(' ')
    const { id } = jwtDecode(token)
    await crearPublicacion({ id, nombre, descripcion, precio, imagen })
    res.status(201).json({ message: 'Publicación agregada con éxito' })
  } catch (error) {
    res.status(error.code).json({ message: error.message })
  }
})

/** ******OBTENER PUBLICACIONES DEL USUARIO**********/
app.get('/mispublicaciones', authToken, async (req, res) => {
  try {
    const authorization = req.header('Authorization')
    const [, token] = authorization.split(' ')
    const { id } = jwtDecode(token)
    const mispublicaciones = await traerMisPublicaciones(id)
    res.status(200).json(mispublicaciones)
  } catch (error) {
    res.status(error.code).json({ message: error.message })
  }
})

/** ******CONSULTA REGISTROS DE COMPRA**********/
app.get('/miscompras', authToken, async (req, res) => {
  try {
    const authorization = req.header('Authorization')
    const [, token] = authorization.split(' ')
    const { id } = jwtDecode(token)
    const miscompras = await traerMisCompras(id)
    res.status(200).json(miscompras)
  } catch (error) {
    res.status(error.code).json({ message: error.message })
  }
})

/** ******CREACIÓN DE REGISTRO DE COMPRA**********/
app.post('/carrito', authToken, async (req, res) => {
  const { productos, totalBoleta, fecha } = req.body
  try {
    const authorization = req.header('Authorization')
    const [, token] = authorization.split(' ')
    const { id } = jwtDecode(token)
    const registroAgregado = await crearRegistroCompra({ id, productos, totalBoleta, fecha })
    res.status(201).json({ message: 'Su compra fue realizada exitosamente', compra: registroAgregado })
  } catch (error) {
    res.status(error.code).json({ message: error.message })
  }
})

/** ****** ELIMINAR PUBLICACIÓN**********/
app.delete('/mispublicaciones', authToken, async (req, res) => {
  try {
    const publicacionIdEliminar = req.body.IdEliminar
    await eliminarPublicacion(publicacionIdEliminar)
    res.status(200).json({ message: 'Publicación eliminada --> backend' })
  } catch (error) {
    res.status(error.code || 500).json({ message: error.message })
  }
})

/** ******ACTUALIZACIÓN DE PUBLICACIÓN**********/
app.put('/mispublicaciones', authToken, async (req, res) => {
  try {
    const { id, nombre, descripcion, precio, imagen } = req.body
    await actualizarProducto({ id, nombre, descripcion, precio, imagen })
    res.status(201).json({ message: 'La publicación ha sido actualizada con éxito' })
  } catch (error) {
    res.status(error.code).json({ message: error })
  }
})

/** ******TRAER DATOS DE PUBLICACIÓN**********/
app.get('/tienda/producto/:id', async (req, res) => {
  try {
    const [result] = await traerPublicacionPorID(req.params.id)
    if (result) { res.status(200).json(result) } else {
      const error = new Error(response?.error || 'No se encuentra la publicación. Es probable que ya no exista.') // error message
      error.code = response?.code || 404 // you can custom insert your error code
      throw error
    }
  } catch (error) {
    res.status(error.code).json({ error })
  }
})

export default app
