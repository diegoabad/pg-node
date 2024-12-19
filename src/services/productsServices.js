const pool = require('../config/db');
const productsQueries = require('../queries/productsQueries');

const productsServices = {
  findAll: async (limit, page, orderBy = 'id', orderDirection = 'ASC') => {
    try {
      const offset = (page - 1) * limit; //limit = 5   page = 2   offset = 5
      console.log({ orderBy, orderDirection, limit, offset });
      const { rows: products } = await pool.query(
        productsQueries.selectAllProducts(
          limit,
          offset,
          orderBy,
          orderDirection
        )
      );
      return products;
    } catch (error) {
      console.error(error);
      throw new Error('Error al buscar todos los productos: ', error);
    }
  },

  findById: async (id) => {
    try {
      const { rows } = await pool.query(productsQueries.selectProductById, [
        id,
      ]);
      return rows[0];
    } catch (error) {
      throw new Error(`Error al buscar el producto con el id: ${id} `, error);
    }
  },

  create: async (name, price) => {
    try {
      const { rows } = await pool.query(productsQueries.insertProduct, [
        name,
        price,
      ]);
      return rows[0];
    } catch (error) {
      throw new Error('Error al guardar el producto en la DB', error);
    }
  },

  delete: async (id) => {
    try {
      const { rows } = await pool.query(productsQueries.deleteProduct, [id]);
      return rows[0];
    } catch (error) {
      throw new Error('Error al eliminar el producto de la DB', error);
    }
  },

  edit: async (id, name, price) => {
    try {
      const { rows } = await pool.query(productsQueries.updateProduct, [
        name,
        price,
        id,
      ]);
      return rows[0];
    } catch (error) {
      throw new Error('Error al editar el producto en la DB', error);
    }
  },
};

module.exports = productsServices;
