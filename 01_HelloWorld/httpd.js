const http = require('http')

http
    .createServer(function (request, response) {
        console.log(request)
        response.end('Hello world!')
    })
    .listen(3000)