const express = require('express')
const router = express.Router()
const foodCategory_Controller = require('../controllers/foodCategory')


router.post('/', foodCategory_Controller.foodCategory)
module.exports = router