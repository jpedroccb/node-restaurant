const express = require('express')
const router = express.Router()
const UsersController = require('../api/controllers/UsersController') 

router.post('/',UsersController.store);
router.get('/', UsersController.index);
router.get('/:id', UsersController.show);

module.exports = router