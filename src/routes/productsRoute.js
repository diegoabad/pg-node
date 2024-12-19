const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const middlewarePrueba = require('../middlewares/middlewarePrueba');

router.get('/', middlewarePrueba, productsController.findAll);

router.get('/:id', middlewarePrueba, productsController.findById);

router.post('/', middlewarePrueba, productsController.create);

router.delete('/:id', middlewarePrueba, productsController.delete);

router.put('/:id', middlewarePrueba, productsController.edit);

module.exports = router;
