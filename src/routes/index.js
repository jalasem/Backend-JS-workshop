import express from 'express'
import { serverResponse } from '../utils/helpers'

// import routes
import userRoutes from './user.routes'

const router = express.Router()

router.use('/users', userRoutes)

router.get('/', (req, res) => {
  serverResponse(res, 'Welcome to the beginning of nothingness')
})

export default router
