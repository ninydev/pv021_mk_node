const jwt = require("jsonwebtoken");
const config = process.env;

exports.refresh = async  (req, res, next) => {

    const token_refresh =
        req.body.token_refresh ||
        req.query.token_refresh ||
        req.headers["x-access-token-refresh"] ||
        req.headers["token_refresh"];

    if (!token_refresh) {
        // Если нужно вываливать 403 ошибку
        return res.status(403).send("A token is required for authentication");
    }
    try {
        console.log(token_refresh)
        const jwtUser = jwt.verify(token_refresh, config.TOKEN_KEY);
        let user = { user_id: jwtUser.user_id, email: jwtUser.email }

        console.log(jwtUser)

        user.token = jwt.sign(
            { user_id: jwtUser._id, email: jwtUser.email },
            process.env.TOKEN_KEY,
            {
                // expiresIn: "2h",
                expiresIn: 60,
            })

        // Токен для обновления токена
        user.token_refresh = jwt.sign(
            { user_id: jwtUser._id, email: jwtUser.email },
            process.env.TOKEN_KEY,
            {
                // expiresIn: "2h",
                expiresIn: "2h",
            },
            null
        );

        // user
        console.log(user)
        return res.status(200).json(user);

    } catch (err) {
        return res.status(401).send("Invalid Token");
    }
};