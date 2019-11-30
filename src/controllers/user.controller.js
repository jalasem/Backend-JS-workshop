import { serverResponse } from '../utils/helpers'

const users = [
  { name: 'musa', id: 23 },
  { name: 'Esther', id: 24 },
  { name: 'razi', id: 32 }
]

export const getUsers = (req, res) => {
  serverResponse(res, {
    payload: {
      users
    }
  })
}

export const getUser = (req, res) => {
  const { id } = req.params // id = req.params.id :) destructuring
  let user = users.filter(aUser => aUser.id === parseInt(id))

  if (!user.length) {
    return serverResponse(res, 'user does not exist', 404, 'error')
  }

  user = user[0]

  return serverResponse(res, {
    payload: {
      user
    }
  })
}

export const addUser = (req, res) => {
  const {
    name
  } = req.body

  if (!name) return serverResponse(res, 'name is required!', 400, 'error')

  users.push({
    name,
    id: Math.floor(Math.random() * 100)
  })

  return serverResponse(res, {
    payload: {
      message: 'user added successfully',
      users
    }
  }, 201)
}
