import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    portt: process.env.PORTT || 3306
})

connection.connect(err => {
    if (err) {
        console.log('Error error connecting to database', err);
        return
    }
    console.log('Conected to database, OK!')
})

export default connection;
