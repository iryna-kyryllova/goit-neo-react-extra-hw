import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://connections-api.goit.global'
})

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
