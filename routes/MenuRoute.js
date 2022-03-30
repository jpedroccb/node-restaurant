const express = require('express')
const router = express.Router()
const MenuController = require('../api/http/Menu/MenuController')

router.post('/', MenuController.store)

module.exports = router