
import express from 'express'
import routes from './routes/route.js'
import dotenv from 'dotenv'
import connection from './config/database.js';
// import cron from 'node-cron' //pra agendar as mudanças dde preço as 00:00
// import updatePrices from './'

dotenv.config();

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use('/', routes)

app.listen(port, () => {
    console.log(`Running in http://localhost:${port}`)
})
