import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.foodName === newItem.foodName);
      
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
      state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
    },
    
    removeFromCart(state, action) {
      const foodName = action.payload;
      const existingItem = state.items.find(item => item.foodName === foodName);

      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter(item => item.foodName !== foodName);
        } else {
          existingItem.quantity--;
        }
        state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
      }
    },
    
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
    }
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;