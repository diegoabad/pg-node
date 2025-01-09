const usersServices = require('../services/usersServices');

const usersController = {
  findAll: async (req, res) => {},

  create: async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Faltan datos' });
    }
    try {
      const userCreated = await usersServices.create(name, email, password);
      res.status(201).json({ product: userCreated, message: 'Usuario creado' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  },

  login: async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Faltan datos' });
    }
    try {
      const token = await usersServices.login(email, password);
      res.status(201).json({ token, message: 'Usuario Logueado' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = usersController;
