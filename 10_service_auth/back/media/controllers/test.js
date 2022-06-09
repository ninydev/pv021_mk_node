exports.test = async function (req, res) {
    console.log(req.user)
    res.status(200).send('work')
}