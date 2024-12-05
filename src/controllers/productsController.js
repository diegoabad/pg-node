const pool = require('../config/db');

const productsController = {
  findAll: async (req, res) => {
    const { rows } = await pool.query('SELECT name, price FROM products');
    if (rows.length === 0) {
      return res.status(404).json({ message: 'No se encontraron productos' });
    }
    res.status(200).json({ products: rows });
  },

  findById: async (req, res) => {
    const { id } = req.params;
    const { rows } = await pool.query(
      `SELECT * FROM products WHERE id = ${id}`
    );
    if (rows.length === 0) {
      return res
        .status(404)
        .json({ message: `No se encontro el producto ${id}` });
    }
    res.status(200).json({ product: rows[0] });
  },

  create: async (req, res) => {
    const { name, price } = req.body;
    if (!name || !price) {
      return res.status(400).json({ message: 'Faltan datos' });
    }
    const { rows } = await pool.query(
      `INSERT INTO products (name, price) VALUES ('${name}', ${price}) RETURNING *`
    );

    if (rows.length === 0) {
      return res.status(400).json({ message: 'No se pudo crear el producto' });
    }
    res.status(201).json({ product: rows[0], message: 'Producto creado' });
  },

  delete: async (req, res) => {
    const { id } = req.params;
    const { rows } = await pool.query(
      `DELETE FROM products WHERE id = ${id} RETURNING *`
    );
    if (rows.length === 0) {
      return res
        .status(404)
        .json({ message: `No se encontro el producto ${id}` });
    }
    res.status(200).json({ product: rows[0], message: 'Producto eliminado' });
  },

  edit: async (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;
    if (!name || !price) {
      return res.status(400).json({ message: 'Faltan datos' });
    }
    const { rows } = await pool.query(
      `UPDATE products SET name = '${name}', price = ${price} WHERE id = ${id} RETURNING *`
    );
    if (rows.length === 0) {
      return res
        .status(404)
        .json({ message: `No se encontro el producto ${id}` });
    }
    res.status(200).json({ product: rows[0], message: 'Producto actualizado' });
  },
};

module.exports = productsController;
