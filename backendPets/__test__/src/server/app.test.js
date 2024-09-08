import 'dotenv/config' // dotenv?
import request from 'supertest'
import app from '../../../src/server/app.js'

// token, correo y rut  deben ser reemplazado al iniciar los test
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb3JyZW8iOiJwYW1lbGFAZ21haWwuY29tIiwiaWF0IjoxNzI1NzgyNTQwLCJleHAiOjE3MjU3ODYxNDB9.F0Qd4LTXBoGJCyprHYt8bV2z1VN1yFTvy-OEWVreT-Y'
const NEW_USER = {
  nombre: 'lucas',
  apellido: 'munoz',
  correo: 'feñae@gmail.com',
  contrasena: '12345678',
  rut: '18818582-8',
  telefono: 965280503,
  direccion: 'direccion lucas'
}
const VALID_USER = {
  correo: 'lucas@gmail.com',
  contrasena: '12345678'
}

describe('SERVER APP', () => {
  test('RUTA_1 [GET / | Debe retornar status code 200 y un array]', async () => {
    const response = await request(app).get('/').send()
    expect(response.status).toBe(200)
    expect(response.body).toBeInstanceOf(Array)
    expect(response.body[0]).toBeInstanceOf(Object)
  })

  test('[POST] /registrarse | Debe retornar mensaje de éxito al crear un nuevo usuario]', async () => {
    const response = await request(app).post('/registrarse').send(NEW_USER)
    console.log(response)
    expect(response.status).toBe(200)
  })

  test('[POST /registrarse | Error al intentar un usuario con rut o mail existente]', async () => {
    const response = await request(app).post('/registrarse').send(NEW_USER)
    expect(response.error.status).toBe(400)
    expect(response.body.message).toBe('El correo ingresado ya existe en nuestros registros' || 'No se puede registrar rut ya existe en bd')
  })

  test('[POST /ingresar | *******]', async () => {
    const response = await request(app).post('/login ').send(VALID_USER)
    expect(response.status).toBe(200)
    expect(response.body).toBeInstanceOf(Object)
    expect(response.body).toHaveProperty('token')
  })

  test('[MIDDLEWARE] /perfil | deberia entregar un error al intentar acceder a una ruta protegida sin proporcionar un token', async () => {
    const response = await request(app).get('/usuario').send()
    expect(response.status).toBe(401)
    expect(response.body.message).toBe('Token no proporcionado')
  })

  test('[MIDDLEWARE] /perfil | deberia entregar un error al intentar acceder a una ruta protegida sin proporcionar un token', async () => {
    const response = await request(app).get('/usuario').set('Authorization', 'fake_token').send()
    expect(response.status).toBe(401)
    expect(response.body.message).toBe('Token mal formado')
  })

  // test('[GET] /tienda |Debe retornar un Cód.200 y devolver un Array', async () => {
  //   const response = await request(app).get('/tienda').send()
  //   expect(response.status).toBe(200)
  //   expect(response.body).toBeInstanceOf(Array)
  // })

  test('[GET] /usuario | Debe retornar un Cód 401 al NO proporcionar un token', async () => {
    const response = await request(app).get('/usuario').send()
    expect(response.status).toBe(401)
  })

  test('[GET] /usuario | Debe retornar un Cód 401 al proporcionar un token mal formado ', async () => {
    const response = await request(app).get('/usuario').set('Authorization', 'Vearer token').send()
    expect(response.status).toBe(401)
  })

  test('[GET] /usuario | Debe retornar Cód 200 al proporcionar un token válido, un Array de Objeto con la Información del usuario', async () => {
    const response = await request(app).get('/usuario').set('Authorization', `Bearer ${token}`).send()
    expect(response.status).toBe(200)
    expect(response.body).toBeInstanceOf(Array)
    expect(response.body[0]).toBeInstanceOf(Object)
  })

  // test('[POST] /tienda/producto | Debe retornar un Cód. 201 al agregar una publicación', async () => {
  //   const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb3JyZW8iOiJwYW1lbGFAZ21haWwuY29tIiwiaWF0IjoxNzI1Nzc4NTgxLCJleHAiOjE3MjU3ODIxODF9.TXNLcrrZSFhLi83Mmp1l7yGECTAN6TuwD2Ba8EFB0mo'
  //   const nuevoProducto = { nombre: 'nombreTest', descripcion: 'descripcionTest', precio: 'precioTest', imagen: 'urlTest' }
  //   const response = await request(app).post('/tienda/producto').set('Authorization', `Bearer ${token}`).send(nuevoProducto)
  //   console.log(response.error.text)
  //   expect(response.status).toBe(202) //da error
  // })

  test('[PUT] /mispublicaciones| Debe retornar un Cód.201 al actualizar una publicación', async () => {
    const productoActualizar = { id: '6', nombre: 'actualizar', descripcion: 'actualizar descripcion', precio: 1, imagen: 'urlimagen' }
    const response = await request(app).put('/mispublicaciones').set('Authorization', `Bearer ${token}`).send(productoActualizar)
    expect(response.status).toBe(201)
    expect(response.body.message).toBe('El producto ha sido actualizado con éxito')
  })

  test('[GET /tienda/producto/:id | Debe retornar un Cód.200 al enviar el id  y devolver un  Array con un objeto de la publicación', async () => {
    const id = '7'
    const response = await request(app).get(`/tienda/producto/${id}`)
    expect(response.status).toBe(200)
    expect(response.body).toBeInstanceOf(Array)
  })
})
