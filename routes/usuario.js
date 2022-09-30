const express = require('express')
const router = express.Router()
const controller = require('../controllers/usuario')
const verifToken = require('../lib/verif_token')

router.post('/', controller.create)
router.get('/', controller.retrieve)
// :id é uma parte variavel de URI que será interpretada como um parâmetro cahamdo ID
router.get('/:id', controller.retrieveOne)
router.patch('/:id', controller.update)
router.delete('/:id', controller.delete)

router.post('/login', controller.login)

module.exports = router