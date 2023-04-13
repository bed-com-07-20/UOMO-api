const mysql = require('mysql')
//const dotenv = require('dotenv')
//dotenv.config()

const config={
    database: "uomo_api",
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    port:3000,
    connectionLimit: 100,
}
const connection =mysql.createConnection(config)

module.exports = connection