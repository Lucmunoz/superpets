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

// crear publicación
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

// traerMisPublicaciones
export const traerMisPublicaciones = async (correo) => {
  const { rows } = await db('SELECT id FROM usuarios WHERE correo = $1', [correo])
  const usuarioId = rows[0].id
  const respuesta = await db('SELECT * FROM productos WHERE id_usuarios = $1', [usuarioId])
  return respuesta.rows
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

/** ******CREACIÓN DE REGISTRO DE COMPRA*****OK*****/
export const crearRegistroCompra = async ({ correo, productos, totalBoleta, fecha }) => {
  try {
    const { rows } = await db('SELECT id FROM usuarios WHERE correo = $1', [correo])
    const usuarioId = rows[0].id
    /* Habiendo obtenido el ID del usuario, debo realizar dos insersiones en bases de datos:
      La primera insersión es en la tabla "compras" la cual guarda los siguientes valores:
      - id (N° boleta)
      - ID del usuario
      - Total de la compra
      - Fecha de la compra

      La segunda insersión es en la tabla "detalle de compras" en donde debo insertar:
      - id
      - id (N° boleta) <- recuperado luego de hacer la insersión en tabla compras
      - ID del usuario
      - ID de productos
      - Cantida del producto
      - Precio del producto

      La insersión se realizará tantas veces como productos tenga el usuario en su carro.
    */
    // Insrsión en tabla compras
    const consultaCompras = 'INSERT INTO compras (id, id_usuarios, total_boleta, fecha) VALUES ($1, $2, $3, $4) RETURNING *;'
    const valuesCompras = [uuidv4(), usuarioId, totalBoleta, fecha]
    const respuestaCompras = await db(consultaCompras, valuesCompras)
    const IDcompra = respuestaCompras.rows[0].id
    // Insersión en tabla detalle de compras
    const consultaDetalleCompras = 'INSERT INTO detalle_compras (id, id_compras, id_usuarios, id_productos, cantidad_elemento, precio_unitario) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;'
    const promesas = productos.map(async (producto) => {
      const valuesDetalleCompras = [uuidv4(), IDcompra, usuarioId, producto.id, producto.cantidad, producto.precio]
      await db(consultaDetalleCompras, valuesDetalleCompras)
    })
    const result = await Promise.all(promesas)
    return result.json
  } catch (error) {
    const newError = { message: 'No se ha podido procesar tu compra, Fallo-1', error }
    throw newError
  }
}

/** ******CONSULTA REGISTROS DE COMPRA**********/
export const traerMisCompras = async (correo) => {
  let arregloCompras = []

  try {
    const { rows } = await db('SELECT id FROM usuarios WHERE correo = $1', [correo])
    const usuarioId = rows[0].id
    const respuesta = await db('SELECT * FROM compras WHERE id_usuarios = $1', [usuarioId])
    arregloCompras = [...respuesta.rows]

    // console.log(arregloCompras)

    const ConsultaDetalleCompras = 'SELECT id_compras, id_productos, cantidad_elemento as cantidad, precio_unitario, detalle_productos.nombre, detalle_productos.descripcion, detalle_productos.imagen  FROM detalle_compras AS compra INNER JOIN(SELECT id, nombre, descripcion, imagen from productos) AS detalle_productos ON compra.id_productos = detalle_productos.id WHERE compra.id_compras = $1'
    const promesas2 = arregloCompras.map(async (compra) => {
      return await db(ConsultaDetalleCompras, [compra.id])
    })
    const resultado = await Promise.all(promesas2.map((response) => response))
    // const resultado = arregloCompras.map((compra)=> )
    const arregloDetalleCompras = [...resultado.map((objeto) => { return (objeto.rows) })]

    const arregloComprasFinal = arregloCompras.map((compra) => ({ detalle: (arregloDetalleCompras.flat().filter((detalle) => detalle.id_compras === compra.id)), ...compra }))
    return (arregloComprasFinal)
  } catch (error) {
    const newError = { message: 'No se ha podido procesar tu compra, Fallo-1', error }
    throw newError
  }
}
