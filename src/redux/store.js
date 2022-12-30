import { configureStore } from '@reduxjs/toolkit';
import filterFoodView from './dishesSlice';
import cart from './cartSlice';


export const store = configureStore({
    reducer: {
        filterFoodView,
        cart
    },
})