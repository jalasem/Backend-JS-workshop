import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
  res.json({
    status: 'success',
    payload: {
      message: 'Welcome user routes'
    }
  })
})

export default router
