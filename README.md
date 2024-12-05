# Proyecto Backend con Node.js y PostgreSQL

Este proyecto está construido con Node.js y utiliza PostgreSQL como base de datos. A continuación, se describen los pasos para configurar y ejecutar el proyecto.

## Resumen de los Pasos

1. **Clonar el Repositorio**: Clona el repositorio si no lo has hecho ya.

```bash
git clone <url_del_repositorio>
cd <nombre_del_repositorio>
Instalar las Dependencias: Ejecuta npm install para crear la carpeta node_modules.
bash
Copiar código
npm install
Configurar el Archivo .env: Copia el archivo .env.example a .env y configura tus variables de entorno.
bash
Copiar código
cp .env.example .env
Abre el archivo .env y configura las siguientes variables con tus datos:

env
Copiar código
PG_USER=your_postgres_user
PG_HOST=localhost
PG_DATABASE=your_database_name
PG_PASSWORD=your_postgres_password
PG_PORT=5432
PORT=3000
PG_USER: Tu usuario de PostgreSQL.
PG_HOST: El host de PostgreSQL (por defecto es localhost).
PG_DATABASE: El nombre de la base de datos que quieres usar.
PG_PASSWORD: La contraseña de tu usuario de PostgreSQL.
PG_PORT: El puerto de PostgreSQL (por defecto es 5432).
PORT: El puerto en el que correrá tu servidor Express (por defecto es 3000).
Crear las Tablas en PostgreSQL: Conéctate a tu base de datos PostgreSQL y ejecuta las siguientes consultas para crear las tablas necesarias.
Consultas para Crear las Tablas en PostgreSQL:
sql
Copiar código
-- Crear la tabla de productos
CREATE TABLE productos (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Crear la tabla de categorías
CREATE TABLE categorias (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Crear la tabla intermedia para la relación muchos a muchos entre productos y categorías
CREATE TABLE product_categories (
    product_id INT REFERENCES productos(id) ON DELETE CASCADE,
    category_id INT REFERENCES categorias(id) ON DELETE CASCADE,
    PRIMARY KEY (product_id, category_id)
);
Iniciar el Proyecto: Ejecuta npm start para correr el servidor.
bash
Copiar código
npm start
El servidor debería estar corriendo en el puerto especificado en el archivo .env (por defecto es 3000).

Borrar el archivo .env.example: Si ya no lo necesitas, elimina el archivo .env.example.
bash
Copiar código
rm .env.example
Notas
Asegúrate de tener PostgreSQL instalado y en funcionamiento en tu máquina.
Si prefieres trabajar en un entorno de desarrollo, asegúrate de tener las variables de entorno correctamente configuradas.
Si necesitas más tablas o modificaciones en la base de datos, actualiza las consultas SQL y ejecútalas en tu cliente PostgreSQL.
 
