### Resumen de los Pasos:

1. **Clonar el Repositorio**: Clona el repositorio si no lo has hecho ya.
2. **Instalar las Dependencias**: Ejecuta `npm install` para crear la carpeta `node_modules`.
3. **Configurar el Archivo `.env`**: Copia el archivo `.env.example` a `.env` y configura tus variables de entorno.
4. **Crear las Tablas en PostgreSQL**: Ejecuta las consultas SQL proporcionadas para crear las tablas necesarias.
5. **Iniciar el Proyecto**: Ejecuta `npm start` para correr el servidor.
6. **Borrar el archivo `.env.example`**: Si ya no lo necesitas, elimina el archivo `.env.example`.

¡Con estos pasos deberías poder configurar y ejecutar tu proyecto correctamente!

-- Crear la tabla de productos
CREATE TABLE products (
id SERIAL PRIMARY KEY,
name VARCHAR(255) NOT NULL,
price DECIMAL(10, 2) NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Crear la tabla de categorías
CREATE TABLE categories (
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
