import { createSlice } from '@reduxjs/toolkit'

const token = localStorage.getItem('access')

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
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
      localStorage.removeItem('access')
    },
  },
})

export const { loginSuccess, logout } = authSlice.actions
export default authSlice.reducer
