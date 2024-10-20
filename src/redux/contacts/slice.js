import { createSlice } from '@reduxjs/toolkit'
import { logout } from '../auth/operations'
import { fetchContacts, addContact, deleteContact } from './operations'

const initialState = {
  items: [],
  loading: false,
  error: null
}

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.items = payload
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items.push(payload)
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter((item) => item.id !== payload.id)
      })
      .addCase(logout.fulfilled, (state) => {
        state.items = []
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

export default contactsSlice.reducer
