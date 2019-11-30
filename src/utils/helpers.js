/**
 * @param {object} res response from server
 * @param {object} data response data
 * @param {number} status status code
 * @param {string} type response type: success or error
 */
export const serverResponse = (res, data, status = 200, type = 'success') => {
  const response = {
    status: type
  }

  if (type === 'error') {
    response.error = data
  } else if (typeof data === 'string') {
    response.payload = {
      message: data
    }
  } else {
    response.data = data
  }
  res.status(status).json(response)
}
