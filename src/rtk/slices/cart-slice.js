import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
  initialState: [],
  name: "cartSlice",
  reducers: {
    addCart: (state, action) => {
      const product = action.payload;
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        // Increase the Quantity
        return state.map((x) => {
          if (x.id === product.id) {
            return { ...x, qty: x.qty + 1 };
          } else {
            return x;
          }
        });
      } else {
        const product = action.payload;
        return [...state, { ...product, qty: 1 }];
      }
    },
    delCart: (state, action) => {
      const product = action.payload;
      const exist1 = state.find((x) => x.id === product.id);
      if (exist1.qty === 1) {
        return state.filter((x) => x.id !== exist1.id);
      } else {
        return state.map((x) => {
          if (x.id === product.id) {
            return { ...x, qty: x.qty - 1 };
          } else {
            return x;
          }
        });
      }
    },
    destroyCart: (state, action) => {
      const product = action.payload;
      return state.filter((x) => x.id !== product.id);
    },
    clear: (state, action) => {
      return (state = []);
    },
  },
});
export const { addCart, delCart, destroyCart, clear } = cartSlice.actions;
export default cartSlice.reducer;