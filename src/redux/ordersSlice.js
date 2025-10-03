// src/redux/ordersSlice.js

import { createSlice } from '@reduxjs/toolkit';

const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    history: [],
  },
  reducers: {
    placeOrder(state, action) {
      const order = {
        id: Date.now(), 
        items: action.payload.items,
        totalPrice: action.payload.totalPrice,
        date: new Date().toLocaleString(),
        status: 'Processing',
        deliveryEstimate: '30 minutes',
      };
      state.history.unshift(order);
    },
  },
});

export const { placeOrder } = ordersSlice.actions;

export default ordersSlice.reducer;