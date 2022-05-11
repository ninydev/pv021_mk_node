let crypto = require('crypto')
const tokenKey = '1a2b-3c4d-5e6f-7g8h'

let tmpUsers = [
    {
        "id": 1,
        "login": "user1",
        "password": "password1"
    },
    {
        "id": 2,
        "login": "user2",
        "password": "password2"
    },
    {
        "id": 3,
        "login": "user3",
        "password": "password3"
    }
]

exports.middlewareAuth = async function (req, res, next) {
    console.log(req.headers.authorization)
    if (req.headers.authorization) {
        let tokenParts = req.headers.authorization
            .split('.')
            //.split('.')
        let signature = crypto
            .createHmac('SHA256', tokenKey)
            .update(`${tokenParts[0]}.${tokenParts[1]}`)
            .digest('base64')

        if (signature === tokenParts[2])
            req.user = JSON.parse(
                Buffer.from(tokenParts[1], 'base64').toString(
                    'utf8'
                )
            )
        next()
    }
    // req.user = {name: 'Guest'}
    next()
}

exports.authByLogin = async function (req, res){
    for (let user of tmpUsers) {
        if (
            req.body.login === user.login &&
            req.body.password === user.password
        ) {
            let head = Buffer.from(
                JSON.stringify({ alg: 'HS256', typ: 'jwt' })
            ).toString('base64')
            let body = Buffer.from(JSON.stringify(user)).toString(
                'base64'
            )
            let signature = crypto
                .createHmac('SHA256', tokenKey)
                .update(`${head}.${body}`)
                .digest('base64')

            return res.status(200).json({
                id: user.id,
                login: user.login,
                token: `${head}.${body}.${signature}`,
            })
        }
    }

    return res.status(404).json({ message: 'User not found' })
}



