const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const middlewareJWT = require('../middlewares/middlewareJWT');

router.post('/', usersController.create);
router.post('/login', usersController.login);

module.exports = router;
