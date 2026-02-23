import { createSlice } from '@reduxjs/toolkit'

const token = localStorage.getItem('access')

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: token ? { username: 'Logged User' } : null,
    token: token || null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload.user
      state.token = action.payload.token
    },
    logout: (state) => {
      state.user = null
      state.token = null
      localStorage.removeItem('access') // important
    },
  },
})

export const { loginSuccess, logout } = authSlice.actions
export default authSlice.reducer
