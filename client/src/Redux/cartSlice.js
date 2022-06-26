import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0
    },
    reducers: {
        addProduct: (state, action) => {
            let prod = state.products.find(x => x.id === action.payload.id)
            if (prod) {
                prod.quantity += action.payload.quantity
            } else {
                state.quantity += 1;
                state.products.push(action.payload);
            }
            state.total += action.payload.price * action.payload.quantity;
        },
        removeProduct: (state, action) => {
            state.quantity -= 1;
            state.total = state.total - (action.payload.price * action.payload.quantity);
            let index = state.products.indexOf(action.payload)
            state.products.splice(index, 1)
        }
    }
});

export const { addProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;