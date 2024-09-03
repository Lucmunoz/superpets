import 'dotenv/config'
import jwt from 'jsonwebtoken'

const KEY_JWT = process.env.KEY_JWT

export const jwtSign = (correo) => jwt.sign(correo, KEY_JWT, { expiresIn: 60 * 60 })
export const jwtVerify = (token) => jwt.verify(token, KEY_JWT)
export const jwtDecode = (token) => jwt.decode(token)
