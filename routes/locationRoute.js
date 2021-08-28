const express = require('express')
const router = express.Router()
const locationController = require('../controllers/location')


router.post('/:id', locationController.location)
module.exports = router