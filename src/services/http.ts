import axios, { AxiosError, AxiosResponse } from 'axios'
import logger from './log'
import config from '../config.json'

const instance = axios.create({
  baseURL: config.baseUrl
})

const handleError = async (error: AxiosError): Promise<AxiosError> => {
  const expectedError =
    error?.response &&
    error.response.status >= 400 &&
    error.response.status < 500

  if (!expectedError) {
    logger.log(error?.response?.data?.message || error?.message || error)
  }

  return Promise.reject(error)
}

instance.interceptors.response.use(
  (response: AxiosResponse) => response,
  handleError
)

export default {
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete
}
