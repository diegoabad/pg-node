const productsQueries = {
  selectAllProducts: (limit, offset, orderBy, orderDirection) => {
    return `SELECT id, name, price FROM productos ORDER BY ${orderBy} ${orderDirection} LIMIT ${limit} OFFSET ${offset}`;
  },

  selectProductById: 'SELECT * FROM productos WHERE id = $1',
  insertProduct:
    'INSERT INTO productos (name, price) VALUES ($1, $2) RETURNING *',
  deleteProduct: 'DELETE FROM productos WHERE id = $1 RETURNING *',
  updateProduct:
    'UPDATE productos SET name = $1, price = $2 WHERE id = $3 RETURNING *',
};

module.exports = productsQueries;
