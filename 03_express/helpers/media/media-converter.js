const fs = require('fs');
const path = require('path');
const webp=require('webp-converter');
const requestImageSize = require('request-image-size');

/**
 * Единая точка перевода изображения в формат WebP
 * @param request - передаю запрос, в котором будет файл
 * @returns - пока не сообщаю
 */
function convertWebP(request) {
    let file = request.file;

    console.log("File: ")
    console.log(file);

    if(!file) {
        return 422
    }

    fs.readFile(file.path, function (error, data) {
        if (error) {
            console.error(error)
            throw error;
        } else {
            let buf = Buffer.from(data);
            let dataBase64 = Buffer.from(buf).toString('base64');
            // base64str of image
            // base64str image type jpg,png ...
            //option: options and quality,it should be given between 0 to 100
            let result = webp.str2webpstr(dataBase64,"jpg","-q 80");
            result.then(function(result) {
                // you access the value from the promise here
                console.log(result)
            });
        }
    });
}

exports.avatar = function (request, response) {
    convertWebP(request)
}


exports.postThumbnail  = function (request, response) {
}


exports.postImages = function (request, response) {
}

// e.t.c ....