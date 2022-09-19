import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import Lights from './Lights'

dotenv.config();

const app: Express = express()
const port = 3000

app.use('/lights', Lights)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})