require('dotenv').config()
const jwt = require('jsonwebtoken')
 
console.log("SECRET_KEY:", process.env.SECRET_KEY);

const generateToken = (payload) => {
    return jwt.sign(payload, process.env.SECRET_KEY)
}

const verifyToken = (token) => {
    return jwt.verify(token, process.env.SECRET_KEY)
}

module.exports = { generateToken, verifyToken }