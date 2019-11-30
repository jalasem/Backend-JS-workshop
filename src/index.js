import express from 'express'
import mongoose from 'mongoose'
import helmet from 'helmet'
import cors from 'cors'
import { json, urlencoded } from 'body-parser'

import config from './config'

// import api routes
import api from './routes/index'
import { serverResponse } from './utils/helpers'

const app = express()

mongoose.connect(config.dbUrl, {
  useCreateIndex: true,
  useNewUrlParser: true
})

app.use(helmet())
  .disable('x-poweredBy')
  .use(cors())
  .use(json({
    limit: '1mb'
  }))
  .use(urlencoded({
    extended: false
  }))

// use api routes
app.use('/v1', api)
app.use('/api/v1', api)

app.get('/', (req, res) => {
  serverResponse(res, 'Welcome to the Workshop')
})

app.all('*', (req, res) => {
  serverResponse(res, 'Invalid route', 404, 'error')
})

app.listen(6000, () => {
  console.log('Server is up on port 6000!')
})
