const express = require('express')
const router = express.Router()
const addCard_Controller = require('../controllers/addTocard')


router.post('/:id', addCard_Controller.Addcard)
module.exports = router