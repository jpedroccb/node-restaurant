const express = require('express')
const router = express.Router()
const UsersController = require('../api/controllers/UsersController') 
const { body } = require('express-validator');
const {UserValidator} = require('../api/validator/users/UserCreateValidator')

router.post('/', UserValidator ,UsersController.store);
router.get('/', UsersController.index);
router.get('/:id', UsersController.show);

module.exports = router