const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/', productsController.findAll);

router.get('/:id', productsController.findById);

router.post('/', productsController.create);

router.delete('/:id', productsController.delete);

router.put('/:id', productsController.edit);

module.exports = router;
