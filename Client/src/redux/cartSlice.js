import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload
      const existing = state.items.find((i) => i.id === item.id)

      if (existing) {
        existing.qty += 1
      } else {
        state.items.push({ ...item, qty: 1 })
      }
    },

    increaseQty: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload)
      if (item) item.qty += 1
    },

    decreaseQty: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload)
      if (item) {
        if (item.qty > 1) {
          item.qty -= 1
        } else {
          state.items = state.items.filter((i) => i.id !== action.payload)
        }
      }
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter((i) => i.id !== action.payload)
    },

    clearCart: (state) => {
      state.items = []
    },
  },
})

export const {
  addToCart,
  increaseQty,
  decreaseQty,
  removeFromCart,
  clearCart,
} = cartSlice.actions

export default cartSlice.reducer
