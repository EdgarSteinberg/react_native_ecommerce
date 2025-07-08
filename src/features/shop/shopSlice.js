import { createSlice } from "@reduxjs/toolkit";
import categories from '../../data/categories.json';
import products from '../../data/products.json';

const shopSlice = createSlice({
    name: 'shop',
    initialState: {
        categories,
        products,
        categorySelected: '',
        productsFilteredByCategory: [],
        productSelected: {}
    },
    reducers: {
        setCategorySelected: (state, action) => {
            state.categorySelected = action.payload
            console.log(state.categorySelected)
        },
        filterProducts: (state, action) => {
            state.productsFilteredByCategory = products.filter(product => product.category.toLowerCase() === state.categorySelected.toLowerCase())
        },
        setProductSelected: (state, action) => {
            state.productSelected = action.payload
        }
    }
});

export const { setCategorySelected, filterProducts, setProductSelected } = shopSlice.actions;

export default shopSlice.reducer;