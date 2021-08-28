const express = require('express')
const router = express.Router()
const orderController = require('../controllers/order')


router.post('/:id', orderController.order)
module.exports = router