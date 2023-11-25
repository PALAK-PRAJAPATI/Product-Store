import {createSlice} from '@reduxjs/toolkit';   // before create a slice you have to import a createSlice package from redux-toolkit.

// create a cartSlice with the help of createSlice and it will take an one object.
// inside the createSlice object you have to create your reducer.
// This object will take a three value.\
// first you have to mentioned your slice name.
// second you have to create initialState as an empty.
// Third you have to create a reducers it will be a object. 
const cartSlice = createSlice({

    name:'cart',
    initialState:[],  //initialState is empty because you don't have any item in your cart.
    reducers:{
        // inside the reducers you have to perform your all actions like add to cart or delete from the cart.

        // add item in cart.
        // it will take two parameters inside the brakets first state and second is your action.
        // whenever you passed some data from the UI you can read the data with the help of action in payload.
        // that payload give us to data and we can update that data with the help of state.
        add(state,action){
            state.push(action.payload);
        },
        
        // remove item.
        remove(state,action){
            return state.filter(item => item.id !== action.payload);
        }

    }
})

// export your actions which you could be created.
export const {add,remove} = cartSlice.actions;
export default cartSlice.reducer;