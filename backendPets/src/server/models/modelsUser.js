import db from '../database/db_connect.js'
import bcryptjs from 'bcryptjs'
import { v4 as uuidv4 } from 'uuid'

// traer todos los productos
export const traerProductos = async () => {
  const respuesta = await db('SELECT * FROM productos;')
  return respuesta.rows
}

// OK
export const registrarUsuario = async ({ nombre, apellido, correo, contrasena, rut, telefono, direccion }) => {
  try {
    const passwordEncriptada = bcryptjs.hashSync(contrasena)
    const consulta = 'INSERT INTO usuarios (id, nombre, apellido, correo, contrasena, rut, telefono, direccion) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;'
    const values = [uuidv4(), nombre, apellido, correo, passwordEncriptada, rut, telefono, direccion]
    await db(consulta, values)
  } catch (error) {
    console.log(error, '[modelsUser.js] => registrarUsuario')
  }
}

// OK
export const verificarCredenciales = async (correo, contrasena) => {
  const consulta = 'SELECT * FROM usuarios WHERE correo = $1;'
  const { rows: [usuario] } = await db(consulta, [correo])
  if (usuario === undefined) {
    const newError = { code: 401, message: 'usuario undefined 02/09' }
    throw newError
  }

  const passwordEncriptada = usuario.contrasena
  const passwordCorrecta = bcryptjs.compareSync(contrasena, passwordEncriptada)

  if (passwordCorrecta === false) {
    const newError = { code: 401, message: 'password incorrecta 02/09' }
    throw newError
  }

  const { rows } = await db('SELECT id, nombre FROM usuarios WHERE correo = $1;', [correo])
  const nombreYId = { id: rows[0].id, nombre: rows[0].nombre }
  return nombreYId
}

export const getUser = async (correo) => {
  console.log(correo, '--> soy el correo del modelo')
  try {
    const { rows } = await db('SELECT nombre, correo, rut, telefono, direccion FROM usuarios WHERE correo = $1;', [correo])
    console.log(rows, '--> rows del usuario desde el modelo')
    return rows
  } catch (error) {
    const newError = { code: 500, message: error }
    throw newError
  }
}

// ok
export const verificarUsuarioExiste = async (correo, rut) => {
  const { rows: correoIngresado } = await db('SELECT * FROM usuarios WHERE correo = $1;', [correo])
  if (correoIngresado.length >= 1) {
    console.log('No se puede registrar correo ya existe en bd')
    const newError = { code: 500, message: 'El correo ingresado ya existe en nuestros registros' }
    throw newError
  }

  const { rows: rutIngresado } = await db('SELECT * FROM usuarios WHERE rut = $1;', [rut])
  if (rutIngresado.length >= 1) {
    console.log('No se puede registrar rut ya existe en bd')
    const newError = { code: 500, message: 'El rut ingresado ya existe en nuestros registros' }
    throw newError
  }
}

// ok- crear publicación
export const crearPublicacion = async ({ correo, nombre, descripcion, precio, imagen }) => {
  try {
    // trae primero el id del usuario
    const { rows } = await db('SELECT id FROM usuarios WHERE correo = $1', [correo])
    const usuarioId = rows[0].id
    // inserta el producto en la tabla productos
    const consulta = 'INSERT INTO productos (id, id_usuarios, nombre, descripcion, precio, imagen) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;'
    const values = [uuidv4(), usuarioId, nombre, descripcion, precio, imagen]
    const respuesta = await db(consulta, values)
    console.log(respuesta.rows)
    return respuesta.rows
  } catch (error) {
    const newError = { message: 'No hemos podido agregar el producto, por favor intenta más tarde', error }
    throw newError
  }
}

// OK-traerMisPublicaciones
export const traerMisPublicaciones = async (correo) => {
  const { rows } = await db('SELECT id FROM usuarios WHERE correo = $1', [correo])
  const usuarioId = rows[0].id
  const respuesta = await db('SELECT * FROM productos WHERE id_usuarios = $1', [usuarioId])
  return respuesta.rows
}

// OK- actualizaProducto
export const actualizarProducto = async ({ idProducto, nombre, descripcion, precio, imagen }) => {
  try {
    const consulta = 'UPDATE productos SET nombre =$1, descripcion = $2, precio = $3, imagen = $4 WHERE id = $5 RETURNING *;'
    const values = [nombre, descripcion, precio, imagen, idProducto]
    const { rows } = await db(consulta, values)
    return rows
  } catch (error) {
    const newError = { message: 'Ha ocurrido un error, favor intenta mas tarde', error }
    throw newError
  }
}

// OK. eliminar usuario
export const eliminarUsuario = async (correo) => {
  try {
    await db('DELETE FROM usuarios WHERE correo = $1; ', [correo])
  } catch (error) {
    const newError = { message: 'En estos momentos no pudimos procesar tu solicitud', error }
    throw newError
  }
}
