const User = require("./../../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs")

exports.tryUserCreate = async function (req, res) {

    // Our register logic starts here
    try {
        // Get user input
        const { email, password } = req.body;

        // console.log(req.body)

        // Validate user input
        if (!(email && password )) {
            return res.status(400).send("All input is required");
        }

        // check if user already exist
        // Validate if user exist in our database
        const oldUser = await User.findOne({ email });

        if (oldUser) {
            return res.status(409).send("User Already Exist. Please Login");
        }

        //Encrypt user password
        let encryptedPassword = await bcrypt.hash(password, 10);

        // Create user in our database
        const user = await User.create({
            email: email.toLowerCase(), // sanitize: convert email to lowercase
            password: encryptedPassword,
        });

        // Create token
        // save user token
        user.token = await jwt.sign(
            {user_id: user._id, email},
            process.env.TOKEN_KEY,
            {
                // expiresIn: "2h",
                expiresIn: 60,
            },
            null
        );

        // console.log('Return User:')
        // console.log(user)

        // return new user
        return res.status(201).json(user);
    } catch (err) {
        console.log(err);
        return res.status(500).send(err.message);
    }
    // Our register logic ends here
}