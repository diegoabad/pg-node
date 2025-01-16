const request = require('supertest');
const server = require('../../index');

describe('PRUEBA API DE PRODUCTOS', () => {
  it('Deberia devolver un status 200 y esperamos un array en el body', async () => {
    const response = await request(server).get(
      '/products?limit=5&page=1&orderBy=name&orderDirection=ASC&login=false'
    );
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('Deberia devolver un status 201, cuando hago un post a /products', async () => {
    const producto = { name: 'Producto de prueba', price: 100 };
    const response = await request(server).post('/products').send(producto);
    expect(response.status).toBe(201);
  });
});
