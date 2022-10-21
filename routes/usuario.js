const express = require('express')
const router = express.Router()
const controller = require('../controllers/usuario')
const verifToken = require('../lib/verif_token')

router.post('/', verifToken, controller.create)
router.get('/', verifToken, controller.retrieve)
// :id é uma parte variável da URI que será interpretada
// como um parâmetro chamado id
router.get('/:id', verifToken, controller.retrieveOne)
router.patch('/:id', verifToken, controller.update)
router.delete('/:id', verifToken, controller.delete)

router.post('/login', controller.login)

module.exports = router