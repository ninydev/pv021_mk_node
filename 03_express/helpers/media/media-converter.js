const fs = require('fs');
const path = require('path');
const webp=require('webp-converter');
const im = require('imagemagick');
const { BlobServiceClient } = require("@azure/storage-blob");

const uploads = 'uploads'
const { AZURE_URL } = process.env;


/**
 * Единая точка перевода изображения в формат WebP
 * @param request - передаю запрос, в котором будет файл
 * @returns - пока не сообщаю
 */
function convertWebP(request) {
    let file = request.file;

    // console.log("File: ")
    // console.log(file);

    if(!file) {
        return 422
    }

    let fromFile = path.join(__dirname, '../../uploads/', file.filename)
    let toFile = path.join(__dirname, '../../public/uploads', file.filename) + ".webp"
    // console.log("FromFile: " + fromFile)

    const result = webp.cwebp(fromFile, toFile,"-q 80",logging="-v");

    // im.resize({
    //     srcPath: toFile,
    //     dstPath: toFile + 'resize',
    //     width:   256
    // }, function(err, stdout, stderr){
    //     if (err) {
    //         console.log("Resize Error: ")
    //         console.log(err)
    //     }
    //     console.log('resized to fit within 256x256px');
    // });
    // console.log(result)
    // result.then((response) => {
    //     // console.log(response);
    //     return 201
    // });

    return 201
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// avatar - 100x100
exports.avatar = async function (request, response) {
    // console.log(request.file)
    let resultImg = convertWebP(request)
    // console.log("Code return " + resultImg)
    if (resultImg === 201) {
        await sleep(2000);

        const fileName = request.file.filename + ".webp"

        fs.readFile(__dirname + '/../../public/uploads/' + fileName,
            async function (err, content) {
                        if (err) {
                            console.log(err)
                            return response.status(500).json(err.message)
                            throw err;
                        }
                        // console.log(content)
                const blobServiceClient = new BlobServiceClient(AZURE_URL);
                const containerClient = blobServiceClient.getContainerClient(uploads);
                const blockBlobClient = containerClient.getBlockBlobClient(fileName);
                const uploadBlobResponse = await blockBlobClient.upload(content, content.length);

                return response.send(JSON.stringify(
                    {
                        filename: "/" + request.file.filename + ".webp",
                        uploadBlobResponse
                    }
                ))
        });

    }
    return response.statusCode = resultImg
}

// post - thumb - 256x256, holder - 1200x256
exports.postThumbnail  = function (request, response) {
}

// images thumb 256x256, big 1204x1024, original
// fileName + _imgType + ex
// {
//     thumb: "a3a44a3a3a2a3a_thumb.webp",
//     big: "a3a44a3a3a2a3a_big.webp",
//     full: "a3a44a3a3a2a3a_full.webp"
// }

exports.postImages = function (request, response) {
}

// e.t.c ....