import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState ={//initial stage of variables
    homeImage:[],
    placeData:[],
    addcart:[],
    count:0
}

export const todoSlice = createSlice({//functions
    name:'tour',
    initialState,
    reducers:{
        addImage:(state, action) =>{//add image for banner
            const imageData = action.payload
            state.homeImage = (imageData)
        },
       addPlace:(state,action) =>{//function for fetching specific city data 
        const placeData = action.payload
        state.placeData = (placeData)
       },
       addCart:(state,action) =>{//function for adding items in cart
        const cartdata = action.payload
        state.addcart.push(cartdata)
       },
       deleteCart:(state,action) =>{//function for removing items form cart
        const itemId  = action.payload
        state.addcart = state.addcart.filter(item => item.id !== itemId);
        // state.addcart.push(cartdata)
        // console.log("cartDataaaaa", cartdata)
       // console.log("Delete Item", cartdata)
        //state.deleteCart.remove(cartData)
       },
       increment:(state) => {//increment inn badges cart
           state.count += 1;
       },
       decrement:(state) => {//decrement in badges cart
           state.count -= 1;
       },
       setCount:(state, action) => {//set count number in badges
           state.count = action.payload;
       }
    }
})

export const {addImage,addPlace,addCart,increment,decrement,setCount,deleteCart} = todoSlice.actions// export all function

export default todoSlice.reducer