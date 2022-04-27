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
exports.post = function (request, response) {
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
