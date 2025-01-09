const pool = require('../config/db');
const usersQueries = require('../queries/usersQueries');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const usersServices = {
  findAll: async () => {},

  create: async (name, email, password) => {
    try {
      // TODO: VALIDAR QUE EL USUARIO NO EXISTA EN LA DB (EMAIL)
      const { rows: user } = await pool.query(usersQueries.findUserByEmail, [
        email,
      ]);

      if (user[0]) {
        throw new Error('El mail ya esta siendo utilizado');
      }
      // UTILIZAR BCRYPT PARA HASHEAR LA CONTRASEÑA
      const passHash = await bcrypt.hash(password, 10);
      const passNoHash = password;
      const { rows } = await pool.query(usersQueries.insertUser, [
        name,
        email,
        passHash,
        passNoHash,
      ]);
      return rows[0];
    } catch (error) {
      throw new Error('Error al guardar el usuario en la DB', error);
    }
  },

  login: async (email, password) => {
    //1) BUSCAR AL USUARIO POR MAIL EN LA DB
    const { rows: user } = await pool.query(usersQueries.findUserByEmail, [
      email,
    ]);

    // 1a) SI NO EXISTE EL USUARIO, LANZAR UN ERROR
    if (!user[0]) {
      throw new Error('Usuario no encontrado');
    }
    // 1b) SI EXISTE EL USUARIO
    // 2b) ACA TENEMOS UN USUARIO  Y SU CONTRASEÑA HASHEADA ACA TENEMOS QUE COMPARARLA CONTRA LA CONTRASEÑA QUE NOS MANDAN

    console.log({
      passwordPlano: password,
      passwordDBHash: user[0].password,
      compare: bcrypt.compareSync(password, user[0].password),
    });
    // 3b) SI LA CONTRASEÑA NO ES CORRECTA, LANZAMOS UN ERROR
    if (!bcrypt.compareSync(password, user[0].password)) {
      throw new Error('Contraseña incorrecta');
    }

    // 4b) SI LA CONTRASEÑA ES CORRECTA, GENERAMOS Y DEVOLVEMOS EL TOKEN
    const payload = {
      id: user[0].id,
      email: user[0].email,
      name: user[0].nombre,
    };
    const token = jwt.sign(payload, 'palabra_secreta');

    return token;
  },
};

module.exports = usersServices;
