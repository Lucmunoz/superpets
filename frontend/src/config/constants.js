export const URLBASE = import.meta.env.VITE_URL_BACKEND_HOST ?? 'http://localhost:3000'

export const ENDPOINT = {
  login: `${URLBASE}/login`,
  users: `${URLBASE}/usuario`,
  registrarse: `${URLBASE}/registrarse`,
  tienda: `${URLBASE}/tienda`,
  home: `${URLBASE}/`,
  producto: `${URLBASE}/tienda/producto`,
  mispublicaciones: `${URLBASE}/mispublicaciones`,
  carrito: `${URLBASE}/carrito`,
  miscompras: `${URLBASE}/miscompras`
}
