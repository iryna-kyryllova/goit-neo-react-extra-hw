import { createSlice } from '@reduxjs/toolkit'
import { register } from './operations'

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
        state.items = payload.user
        state.token = payload.token
        state.isLoggedIn = true
      })
      // .addCase(addContact.fulfilled, (state, { payload }) => {
      //   state.items.push(payload)
      // })
      // .addCase(deleteContact.fulfilled, (state, { payload }) => {
      //   state.items = state.items.filter((item) => item.id !== payload.id)
      // })
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
