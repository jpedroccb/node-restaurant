const express = require('express')
const router = express.Router()
const UsersController = require('../api/User/UsersController') 
const { body } = require('express-validator');
const {UserCreateValidator} = require('../api/User/Validators/UserCreateValidator')

router.post('/', UserCreateValidator ,UsersController.store);
router.get('/', UsersController.index);
router.get('/:id', UsersController.show);

module.exports = router