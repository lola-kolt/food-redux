import { createSlice } from '@reduxjs/toolkit';


export const dishesSlice = createSlice({
    name: 'filterFoodView',
    initialState: {
        selectedFoodType: 'All'
    }, 
    reducers: {
        filterByCategory: (state, action) => {
            state.selectedFoodType = action.payload
        }
    }
})

export const getSelectedFoodType = state => state.filterFoodView.selectedFoodType;
export const { filterByCategory } = dishesSlice.actions
export default dishesSlice.reducer;