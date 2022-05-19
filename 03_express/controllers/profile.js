const fs = require('fs');
const path = require('path');
const users = require('../models/user');

exports.updateAvatar = function (request, response) {
    if(!request.user) {
        console.log('No User')
        return response.status(403)
            .json({ message: 'Not authorized' })
    }

    let upFile = request.body.filename

    let fromFile = path.join(__dirname, '../../uploads/', upFile)
    let toFile = path.join(__dirname, '../../public/storage/avatars/', upFile)

    fs.rename(fromFile,toFile, function (err) {
        if(err){
            return response.status(422)
                .json({message: 'Cant rename'})
        }

        try {
            users.updateOne({_id: request.user._id},
                [
                    {$set: {avatar: upFile, updated_at: Date.now()}},
                    {$unset: []}
                ])
            return  response.status(204)
                .json({avatarUrl: upFile})
        } catch (e){
        return response.status(422).json(e)
        }
    })
}