import express, { Express } from 'express';
import dotenv from 'dotenv';
import Lights from './Services/Lights/Lights'
const cors = require('cors')

dotenv.config();

const app: Express = express()
const port = 3000

app.use(express.json())
app.use(cors())

app.use('/lights', Lights)

app.listen(port)
