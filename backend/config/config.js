require('dotenv').config()

const config = {
    development: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: 'image-sharing-app',
        host: 'localhost',
        dialect: 'postgres'
    }
}

module.exports = config