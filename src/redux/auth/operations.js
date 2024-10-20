import { createAsyncThunk } from '@reduxjs/toolkit'
import { registerApi } from 'api/api'

export const register = createAsyncThunk('auth/register', async (data, thunkAPI) => {
  try {
    const response = await registerApi(data)
    return response
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const login = createAsyncThunk('auth/login', async (data, thunkAPI) => {
  try {
    console.log('Login data:', data)
    // const response = await fetchContactsApi()
    // return response
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    console.log('Logout')
    // const response = await fetchContactsApi()
    // return response
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const refreshUser = createAsyncThunk('auth/refresh', async (data, thunkAPI) => {
  try {
    console.log('Refresh data:', data)
    // const response = await fetchContactsApi()
    // return response
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})
