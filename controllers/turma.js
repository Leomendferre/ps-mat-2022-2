const { Turma, Curso, Professor, Aluno } = require('../models')

const controller = {}       // Objeto vazio

/*
    Métodos do controller:
    create: cria um novo registro
    retrieve: lista todos os registros
    retriveOne: lista apenas um registro
    update: atualiza o registro
    delete: exclui o registro
*/

controller.create = async(req, res) => {
    try {
        await Turma.create(req.body)
        // HTTP 201: Created
        res.status(201).end()
    }
    catch(error) {
        console.error(error)
        // HTTP 500: Internal Server Error
        res.status(500).send(error)
    }
}

controller.retrieve = async (req, res) => {
    try {
        const result = await Turma.findAll({
            include: [
                { model: Curso, as: 'curso' },
                { model: Professor, as: 'professor' },
                { model: Aluno, as: 'alunos'}
            ]
        })
        // HTTP 200: OK (implícito)
        res.send(result)
    }
    catch(error) {
        console.error(error)
        // HTTP 500: Internal Server Error
        res.status(500).send(error)
    }
}

controller.retrieveOne = async (req, res) => {
    try {
        const result = await Turma.findByPk(req.params.id)

        if(result) {
            // HTTP 200: OK (implícito)
            res.send(result)
        }
        else {
            // HTTP 404: Not found  
            res.status(404).end()
        }
    }
    catch(error) {
        console.error(error)
        // HTTP 500: Internal Server Error
        res.status(500).send(error)
    }
}

controller.update = async (req, res) => {
    //console.log('==============>', req.params.id)
    try {
        const response = await Turma.update(
            req.body, 
            { where: { id: req.params.id } }
        )

        // console.log("======>", {response})

        if(response[0] > 0) {  // Encontrou e atualizou
            // HTTP 204: No content
            res.status(204).end()
        }
        else {  // Não encontrou (e não atualizou)
            res.status(404).end()
        }
    }
    catch(error) {
        console.error(error)
        // HTTP 500: Internal Server Error
        res.status(500).send(error)
    }
}

controller.delete = async (req, res) => {
    try {
        const response = await Turma.destroy(
            { where: { id: req.params.id } }
        )

        // console.log("======>", {response})

        if(response) {  // Encontrou e atualizou
            // HTTP 204: No content
            res.status(204).end()
        }
        else {  // Não encontrou (e não atualizou)
            res.status(404).end()
        }
    }
    catch(error) {
        console.error(error)
        // HTTP 500: Internal Server Error
        res.status(500).send(error)
    }
}

module.exports = controller