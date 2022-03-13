import mysql from 'mysql'
import { config } from 'dotenv'

config()

const pool = mysql.createPool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    ssl: {
        "rejectUnauthorized": true
    }
})

const getConnection = () => {
    pool.getConnection((err, connection) => {
        if (err) throw err;
    })
}

export default pool