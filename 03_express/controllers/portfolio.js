const portfolios = require('../models/portfolio')

// Вернуть всех
exports.get = function (request, response) {
    portfolios.find({},
        function (err, all) {
            if(err) {
                console.error(err)
                return err
            }
            response.json(all)
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

