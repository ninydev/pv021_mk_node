const User = require("./../../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs")

exports.tryLogin = async function (req, res) {
    // Our login logic starts here
    try {
        // Get user input
        const { email, password } = req.body;

        // Validate user input
        if (!(email && password)) {
            return res.status(400).send("All input is required");
        }
        // Validate if user exist in our database
        const user = await User.findOne({ email });

        if (user && (await bcrypt.compare(password, user.password))) {
            // Create token
            user.token  = jwt.sign(
                { user_id: user._id, email},
                process.env.TOKEN_KEY,
                {
                    // expiresIn: "2h",
                    expiresIn: 10,
                },
                null
            );

            // Токен для обновления токена
            user.token_refresh = jwt.sign(
                { user_id: user._id, email, isRefresh: true},
                process.env.TOKEN_KEY,
                {
                    // expiresIn: "2h",
                    expiresIn: "2h",
                },
                null
            );

            console.log(user)
            // user
            return res.status(200).json(user);
        }
        return res.status(400).send("Invalid Credentials");
    } catch (err) {
        console.log(err);
        return res.status(500).send(err.message());
    }
}