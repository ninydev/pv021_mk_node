const fs = require('fs');
const path = require('path');
const webp=require('webp-converter');
const im = require('imagemagick');



/**
 * Единая точка перевода изображения в формат WebP
 * @param request - передаю запрос, в котором будет файл
 * @returns - пока не сообщаю
 */
async function convertWebP(request) {
    let file = request.file;

    // console.log("File: ")
    // console.log(file);

    if(!file) {
        return 422
    }

    let fromFile = path.join(__dirname, '../../uploads/', file.filename)
    console.log("FromFile: " + fromFile)

    // im.resize({
    //     srcPath: fromFile,
    //     dstPath: fromFile + 'resize',
    //     width:   256
    // }, function(err, stdout, stderr){
    //     if (err) {
    //         console.log("Resize Error: ")
    //         console.log(err)
    //     }
    //     console.log('resized to fit within 256x256px');
    // });


    const result = webp.cwebp(fromFile,
        fromFile + ".webp","-q 80",logging="-v");
    result.then((response) => {
        console.log(response);
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