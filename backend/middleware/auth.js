const { verifyToken } = require('../lib/jwt');
const { User } = require('../models');

const authentication = async (req, res, next) => {
    try {
        const authorization = req.headers.authorization;
        if (authorization) {
            const token = authorization.split(" ")[1];
            console.log("Received Token:", token);
            const decoded = verifyToken(token);
            console.log("Decoded Payload:", decoded);

            if (decoded) {
                const user = await User.findByPk(decoded.id);
                if (user) {
                    req.loggedUser = {
                        id: user.id,
                        email: user.email,
                        username: user.username
                    };
                    next();
                } else {
                    res.status(401).json({ error: "Invalid credentials" });
                }
            } else {
                res.status(401).json({ error: "Invalid token" });
            }
        } else {
            res.status(401).json({ error: "Unauthenticated" });
        }
    } catch (err) {
        res.status(400).json({ error: "Authentication error", error: err.message });
    }
};

module.exports = { authentication };
