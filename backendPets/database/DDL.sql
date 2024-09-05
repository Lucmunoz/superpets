CREATE DATABASE pets;

\c pets;

CREATE TABLE usuarios (
  id          TEXT,
  correo      VARCHAR(50)   UNIQUE NOT NULL,
  rut         VARCHAR(12)   UNIQUE NOT NULL,
  contrasena  TEXT          NOT NULL,
  nombre      VARCHAR(20)   NOT NULL,
  apellido    VARCHAR(20)   NOT NULL,
  telefono    INTEGER       NOT NULL,
  direccion   TEXT          NOT NULL,
  PRIMARY KEY(id)
);


CREATE TABLE productos (
   id           TEXT,
   id_usuarios  TEXT,
   nombre       VARCHAR(50) NOT NULL,
   descripcion  TEXT        NOT NULL,
   precio       INTEGER     NOT NULL,
   imagen       TEXT        NOT NULL,
   PRIMARY KEY(id),
   FOREIGN KEY(id_usuarios) REFERENCES usuarios(id) ON DELETE CASCADE
);

CREATE TABLE compras (
   id           TEXT,
   id_usuarios  TEXT,
   total_boleta INTEGER     NOT NULL,
   fecha        DATE        NOT NULL,
   PRIMARY KEY(id),
   FOREIGN KEY(id_usuarios) REFERENCES usuarios(id) ON DELETE CASCADE
);

CREATE TABLE detalle_compras (
   id             TEXT,
   id_compras     TEXT,
   id_usuarios    TEXT,
   id_productos   TEXT,
   cantidad_elemento    INTEGER  NOT NULL,
   precio_unitario      INTEGER  NOT NULL,
   PRIMARY KEY(id),
   FOREIGN KEY(id_compras) REFERENCES compras(id),
   FOREIGN KEY(id_usuarios) REFERENCES usuarios(id) ON DELETE CASCADE,
   FOREIGN KEY(id_productos) REFERENCES productos(id)
);
