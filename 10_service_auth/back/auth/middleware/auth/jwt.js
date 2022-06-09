const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req, res, next) => {
    const token =
        req.body.token ||
        req.query.token ||
        req.headers["x-access-token"] ||
        req.headers.authorization;

    if (!token) {
        // Если нужно просто идти дальше
        return next();
        // Если нужно вываливать 403 ошибку
        // return res.status(403).send("A token is required for authentication");
    }
    try {
        const user = jwt.verify(token, config.TOKEN_KEY);
        console.log(user)
        if (user.isRefresh){
            return next()
        }
        req.user = user

    } catch (err) {
        return res.status(401).send("Invalid Token");
    }
    return next();
};

module.exports = verifyToken;