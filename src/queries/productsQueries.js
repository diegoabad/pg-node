const productsQueries = {
  selectAllProducts: 'SELECT name, price FROM productos',
  selectProductById: 'SELECT * FROM productos WHERE id = $1',
  insertProduct:
    'INSERT INTO productos (name, price) VALUES ($1, $2) RETURNING *',
  deleteProduct: 'DELETE FROM productos WHERE id = $1 RETURNING *',
  updateProduct:
    'UPDATE productos SET name = $1, price = $2 WHERE id = $3 RETURNING *',
};

module.exports = productsQueries;
