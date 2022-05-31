const portfolios = require('../models/portfolio')

// Вернуть всех
exports.get = function (request, response) {
    // return response.json({user: 'tobi'})
    // console.log("get")
    // console.log(request.user)
    if(!request.user) {
        console.log('No User')
        return response.status(401)
            .json({ message: 'Not authorized' })
    }

    // let post = { user: request.user, bodyText: request.bodyText /* etc */}

    portfolios.find({},
        function (err, all) {
        console.log('err')
        console.log(err)
        console.log('all')
        console.log(all.length)
            if(err) {
                console.log('Error in find')
                console.error(err)
                return err
            } else {
                // console.log(response)
                try {
                    return response.json(all)
                }
                catch (e) {
                    console.log(e)
                }
            }
        }
    )
}

// Создать
exports.post = async function (request, response) {
    // console.error(request)
    console.log("Body: ")
    console.error(request.body)

    let file = request.file;

    console.log("File: ")
    console.log(file);

    if(!file) {
        response.sendStatus(422)
    }

    let ex = ''
    if(file.mimetype === "image/png") ex = '.png'
    else if (file.mimetype === "image/jpg"|| file.mimetype === "image/jpeg") ex = '.jpg'
    else {
        response.sendStatus(422)
        return
    }

    const fs = require('fs');
    const path = require('path');

    console.log(__dirname)

    let toFile = path.join(__dirname, '../public/storage/portfolio/') + file.filename + ex

    await fs.copyFile(file.path, toFile, function (err) {
        if (err) {
            console.error(err)
            response.send(err)
            return
        }
        // Запись в базу и так далее тут
        console.log('File copy')
        response.send(201)
    } )
    // response.sendStatus(200)
}


// Создать
exports.postJsonType = function (request, response) {
    console.error(request.body)
    const newPortfolio = new portfolios (request.body)
    newPortfolio.save( function (err) {
        if(err) {
            console.error(err)
            return err
        }
        response.sendStatus(201)
    })
}

