import { createAsyncThunk } from '@reduxjs/toolkit'
import { registerApi, loginApi, logoutApi, refreshUserApi } from 'api/api'

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
    const response = await loginApi(data)
    return response
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    return await logoutApi()
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token
      const response = await refreshUserApi(token)
      return response
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
  {
    condition: (_, { getState }) => {
      const token = getState().auth.token
      return token !== null
    }
  }
)
