// aqui conexion a la base de datos
import 'dotenv/config'
import pg from 'pg'

const { Pool } = pg
const config = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  allowExitOnIdle: true,
  ssl: true
}

const pool = new Pool(config)

const db = async (consulta, values) => {
  try {
    const result = await pool.query(consulta, values)
    return result
  } catch (error) {
    const newError = { error, message: 'error en la conexión [db_connect.js]-> db' }
    throw newError
  }
}

export default db
