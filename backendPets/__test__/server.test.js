import 'dotenv/config'
import request from 'supertest'
import app from '../src/server/app'

const NEW_USER = {
  nombre: 'lucas',
  apellido: 'munoz',
  correo: 'lucas@gmail.com',
  contrasena: '12345678',
  rut: '170045914-8',
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
    expect(response.body).toBeInstanceOf(Object)
    expect(response.body)
  })

  test('[POST /registrarse | Deberia retornar mensaje de exito al crear un nuevo usuario]', async () => {
    const response = await request(app).post('/registrarse').send(NEW_USER)
    expect(response.status).toBe(200)
  })

  test('[POST /registrarse | Error al intentar un usuario con rut o mail existente]', async () => {
    const response = await request(app).post('/registrarse').send(NEW_USER)
    expect(response.error.status).toBe(500)
    expect(response.body.Data.message).toBe('El correo ingresado ya existe en nuestros registros' || 'No se puede registrar rut ya existe en bd')
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

  // test('', async() => { })
})
