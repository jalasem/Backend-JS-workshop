import express from 'express'
import { getUsers, getUser, addUser } from '../controllers/user.controller'
const router = express.Router()

router.get('/', getUsers)
router.get('/:id', getUser)
router.post('/', addUser)

export default router
