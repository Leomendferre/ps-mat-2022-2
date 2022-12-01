const jwt = require('jsonwebtoken')

const bypassAuth = process.env.BYPASS_AUTH || false

// Rotas que permitem ser acessadas com ou sem token
const rotasPermissivas = [
    {
        method: 'POST',
        baseUrl: '/usuario'
    }
]

module.exports = (req, res, next) => {

    // Ignora a necessidade de autenticação se a
    // variável de ambiente BYPASS_AUTH for igual a 1
    if(bypassAuth) {
        next()
        return
    }

    // Lê o token passado no cabeçalho da requisição
    // const token = req.headers['x-access-token']

    // Lê o token enviado por cookie seguro (HTTP only)
    const token = req.cookies['app-data']

    if(token) {
        // Verifica se o token é válido e está dentro do prazo de validade
        jwt.verify(token, process.env.TOKEN_SECRET, (erro, decodificado) => {
        
            // Token inválido/expirado
            if(erro) return res.status(403).send({
                auth: false,
                message: 'Falha ao autenticar o token'
            })

            // O TOKEN ESTÁ OK!

            // Salva o id na request para uso posterior
            req.infoLogado = decodificado

            // Chama a próxima função de middleware
            next()
        })
    }
    else {
        // Se o token não for passado, precisamos verificar se se trata
        // de uma rota permissiva que pode ser acessada sem token

        for(let rota of rotasPermissivas) {
            if(req.baseUrl === rota.baseUrl && req.method === rota.method) {
                // Deixa passar
                next()
                return
            }
        }

        // Senão, retorna um erro de falta de token
        return res.status(403).send({
            auth: false,
            message: 'Nenhum token fornecido'
        })
    }
    
}