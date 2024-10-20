import { createSlice } from '@reduxjs/toolkit'
import { register, login, logout } from './operations'

const initialState = {
  user: {
    name: null,
    email: null
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  loading: false,
  error: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user
        state.token = payload.token
        state.isLoggedIn = true
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload.user
        state.token = payload.token
        state.isLoggedIn = true
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = { name: null, email: null }
        state.token = null
        state.isLoggedIn = false
      })
      .addMatcher(
        (action) => action.type.endsWith('/pending'),
        (state) => {
          state.error = null
          state.loading = true
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/fulfilled'),
        (state) => {
          state.loading = false
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, { payload }) => {
          state.loading = false
          state.error = payload
        }
      )
  }
})

export default authSlice.reducer
