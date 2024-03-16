import { createSlice, } from "@reduxjs/toolkit";

const initialState = {
    cartItem: [{
        id: 1,
        name: 'Breakfast box ',
        cost: 99,
        image: 'chair4.png',
        qty: 3

    },
    {
        id: 2,
        name: 'Breakfast box ',
        cost: 89,
        image: 'https://images.unsplash.com/photo-1557686652-6731ba12410f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        qty: 5

    },], // isko bhi samjhn bc ye wo value honi chaiye jo cart mai ho ya wo jaye like that not in cartitem ke andar okay
    // count: 1,
    status: false,
    userData: null,
}
export const cartSlice = createSlice({
    name: "Cart",
    initialState,
    reducers: {
        increamentCart: (state, action) => {
            // state.cartItem.qty = state.cartItem.qty + action.payload
            const item = state.cartItem.find((item) => item.id === action.payload);
            item.qty++;
        },
        // },
        decreamentCart: (state, action) => {
            // state.cartItem.qty = state.cartItem.qty - action.payload
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
            // const newCart = { cart: action.payload };
            // state.cartItem.push(action.payload)
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