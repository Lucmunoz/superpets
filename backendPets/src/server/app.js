import express from 'express'
import cors from 'cors'
import { traerProductos, registrarUsuario, verificarCredenciales, getUser, verificarUsuarioExiste } from './models/modelsUser.js'
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
    const usuario = await verificarCredenciales(correo, contrasena)
    const token = jwtSign({ correo })
    res.status(200).json({ token, id: usuario[0].id, nombre: usuario[0].nombre })
  } catch (error) {
    console.log(error)
    res.status(error.code).json({ message: error.message })
  }
})

app.get('/usuarios', authToken, async (req, res) => {
  try {
    const authorization = req.header('Authorization')
    const [, token] = authorization.split(' ')
    const { email } = jwtDecode(token)
    const usuario = await getUser(email)
    res.status(200).json(usuario)
  } catch (error) {
    res.status(error.code).json({ error })
  }
})

export default app
