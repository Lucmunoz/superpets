import { jwtVerify } from '../../utils/auth/jwt.js'

export const authToken = (req, res, next) => {
  const authorization = req.header('Authorization')
  // Primera validación
  if (authorization === undefined) {
    return res.status(401).json({ message: 'Token no proporcionado' })
  }
  // segunda validación
  const [bearer, token] = authorization.split(' ')
  if (bearer !== 'Bearer') {
    return res.status(401).json({ message: 'Token mal formado' })
  }

  try {
    jwtVerify(token) && next()
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Token no válido' })
  }
}
