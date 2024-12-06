# Pasos para Configurar y Ejecutar el Proyecto

1. **Clonar el Repositorio**: Clona el repositorio si no lo has hecho ya.

```bash
git clone <url_del_repositorio>
cd <nombre_del_repositorio>
```

2. **Instalar las Dependencias**: Ejecuta `npm install` para crear la carpeta `node_modules`.

```bash
npm install
```

3. **Configurar el Archivo `.env`**: Copia el archivo `.env.example` a `.env` y configura tus variables de entorno.

```bash
cp .env.example .env
```

Abre el archivo `.env` y configura las siguientes variables con tus datos:

```env
PG_USER=your_postgres_user
PG_HOST=localhost
PG_DATABASE=your_database_name
PG_PASSWORD=your_postgres_password
PG_PORT=5432
PORT=3000
```

4. **Crear las Tablas en PostgreSQL**: Conéctate a tu base de datos PostgreSQL y ejecuta las consultas SQL proporcionadas para crear las tablas necesarias.

5. **Iniciar el Proyecto**: Ejecuta `npm start` para correr el servidor.

```bash
npm start
```

6. **Borrar el archivo `.env.example`**: Si ya no lo necesitas, elimina el archivo `.env.example`.

```bash
rm .env.example
```
