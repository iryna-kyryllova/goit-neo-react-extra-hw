import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://connections-api.goit.global'
})

const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`
}

const removeToken = () => {
  delete instance.defaults.headers.common.Authorization
}

// Auth

export const registerApi = async (newUser) => {
  const { data } = await instance.post('/users/signup', newUser)
  setToken(data.token)
  return data
}

export const loginApi = async (user) => {
  const { data } = await instance.post('/users/login', user)
  setToken(data.token)
  return data
}

export const logoutApi = async () => {
  await instance.post('/users/logout')
  return removeToken()
}

export const refreshUserApi = async (token) => {
  setToken(token)
  const { data } = await instance.get('/users/current')
  return data
}

// Contacts

export const fetchContactsApi = async () => {
  const { data } = await instance.get('/contacts')
  return data
}

export const addContactApi = async (newContact) => {
  const { data } = await instance.post('/contacts', newContact)
  return data
}

export const deleteContactApi = async (id) => {
  const { data } = await instance.delete(`/contacts/${id}`)
  return data
}
