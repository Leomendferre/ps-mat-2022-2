const express = require('express');

const router = express.Router()
const controller = require('../controllers/professor')

router.post('/', controller.create);

router.get('/', controller.retrieve);

router.get('/:id', controller.retriveOne);

router.patch('/:id', controller.update)

router.delete('/:id', controller.delete)

module.exports = router