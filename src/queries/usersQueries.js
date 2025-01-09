const usersQueries = {
  insertUser:
    'INSERT INTO usuarios (nombre, email, password, pass_no_encriptado) VALUES ($1, $2, $3, $4) RETURNING *',
  findUserByEmail: 'SELECT * FROM usuarios WHERE email = $1',
};

module.exports = usersQueries;
