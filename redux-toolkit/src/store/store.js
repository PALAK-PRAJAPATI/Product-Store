import { configureStore } from "@reduxjs/toolkit";  //import configureStore from redux-toolkit for create your store for the items.
import cartSlice from "./cartSlice.js";  // import cartSlice. 

// create store with the help of configureStore and it will take an one object.
// inside the configureStore it will take an one object 
// inside the reducer object you have to mentioned your slice.
const store = configureStore({
    reducer:{
        cart : cartSlice,
    }
});

export default store;