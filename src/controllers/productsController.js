const productsServices = require('../services/productsServices');

const productsController = {
  findAll: async (req, res) => {
    try {
      const { limit, page, orderBy, orderDirection } = req.query;
      const products = await productsServices.findAll(
        limit,
        page,
        orderBy,
        orderDirection
      );
      if (!products) {
        return res.status(404).json({ message: 'No se encontraron productos' });
      }
      res.status(200).json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  },

  findById: async (req, res) => {
    const { id } = req.params;
    try {
      const product = await productsServices.findById(id);
      if (!product) {
        return res
          .status(404)
          .json({ message: `No se encontro el producto ${id}` });
      }
      res.status(200).json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  },

  create: async (req, res) => {
    const { name, price } = req.body;
    if (!name || !price) {
      return res.status(400).json({ message: 'Faltan datos' });
    }
    try {
      const productCreated = await productsServices.create(name, price);
      res
        .status(201)
        .json({ product: productCreated, message: 'Producto creado' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  },

  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const productDeleted = await productsServices.delete(id);
      if (!productDeleted) {
        return res
          .status(404)
          .json({ message: `No se encontro el producto ${id}` });
      }
      res
        .status(200)
        .json({ product: productDeleted, message: 'Producto eliminado' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  },

  edit: async (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;
    if (!name || !price) {
      return res.status(400).json({ message: 'Faltan datos' });
    }
    try {
      const productUpdated = await productsServices.edit(id, name, price);
      if (!productUpdated) {
        return res
          .status(404)
          .json({ message: `No se encontro el producto ${id}` });
      }
      res
        .status(200)
        .json({ product: productUpdated, message: 'Producto actualizado' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = productsController;
