require('dotenv').config(); // Cargar variables de entorno desde el archivo .env
const express = require('express');
const cors = require('cors');
const pool = require('./src/config/db');
const productsRoute = require('./src/routes/productsRoute');
const usersRoute = require('./src/routes/usersRoute');
const app = express();

// Importar rutas

// Middleware
app.use(cors());
app.use(express.json());

// Conexión a la base de datos
pool.connect().then(() => {
  console.log('Conexión a la base de datos exitosa');
});

// Rutas
app.get('/', (req, res) => {
  res.send('Hola mundo');
});
app.use('/products', productsRoute);
app.use('/users', usersRoute);

// Configuración del puerto
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = server;
