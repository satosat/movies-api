import express from 'express';
import router from './routes/index';
import pool from './db-config'
import { config } from 'dotenv'

config()

const app = express()
const port = process.env.PORT || 8000

const conn = pool.getConnection((e, c) => {
    if (e) throw e
    
    console.log("DB Connected")

    c.query("SELECT * FROM names", (e, rows) => {
        if (e) throw e;

        console.log(rows)
    })
})

app.use(router);

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`)
})
