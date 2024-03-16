import { createSlice, } from "@reduxjs/toolkit";

const initialState = {
    cartItem: [{
        id: 1,
        name: 'Breakfast box ',
        cost: 99,
        image: 'https://images.unsplash.com/photo-1578863950596-a74dfe8267b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1573&q=80',
        qty: 3

    },
    {
        id: 2,
        name: 'Breakfast box ',
        cost: 89,
        image: 'https://images.unsplash.com/photo-1557686652-6731ba12410f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        qty: 5

    },],
    status: false,
    userData: null,
}
export const cartSlice = createSlice({
    name: "Cart",
    initialState,
    reducers: {
        increamentCart: (state, action) => {
            const item = state.cartItem.find((item) => item.id === action.payload);
            item.qty++;
        },
        // },
        decreamentCart: (state, action) => {
            const item = state.cartItem.find((item) => item.id === action.payload);
            if (item.qty === 1) {
                item.qty = 1
            } else {
                item.qty--;
            }
        },
        deleteCart: (state, action) => {
            state.cartItem = state.cartItem.filter((item) => item.id !== action.payload)
        },
        addCart: (state, action) => {
            const itemInCart = state.cartItem.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.qty++;
      } else {
        state.cartItem.push({ ...action.payload, qty: 1 });
      }
        },
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }


    }

})

export const { increamentCart, decreamentCart, deleteCart, login, logout, addCart } = cartSlice.actions;

export default cartSlice.reducer;