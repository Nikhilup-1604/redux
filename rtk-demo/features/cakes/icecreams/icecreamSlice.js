const { cakeActions } = require('../cakeSlice')

const createSlice = require('@reduxjs/toolkit').createSlice

const initialState={
    numOfIcecreams: 20
}
const icecreamSlice = createSlice({
    name:"icecream",
    initialState,
    reducers:{
        ordered: (state) =>{
            state.numOfIcecreams--
        },
        restocked:(state,action) =>{
            state.numOfIcecreams += action.payload
        },
        // Extra Reducers
    // extraReducers:{
    //     ['cake/ordered']:(state)=>{
    //         state.numOfIcecreams--
    //     },
    // },
    extraReducers:(builder) =>{
        builder.addCase(cakeActions.ordered,state=>{
            state.numOfIcecreams--
        })
    }
    },

})

// export 
module.exports = icecreamSlice.reducer
module.exports.icecreamActions = icecreamSlice.actions