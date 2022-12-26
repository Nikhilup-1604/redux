const { bindActionCreators } = require('redux')

const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numOfCakes: 10
}

const cakeSlice = createSlice({
    name:'cake',
    initialState:initialState,
    reducers:{
        ordered:(state) =>{
             //1. we dont need to explicitly return the new state
            //2. We can directly mutate the state
            state.numOfCakes--
        },
        restocked:(state,action)=>{
           state.numOfCakes += action.payload 
        }
    },
})

module.exports = cakeSlice.reducer 
module.exports.cakeActions = cakeSlice.actions

/*The above line of code written handles following things
    1.Defining an action type constant.
    2.Action creator (action object)
    3.Reducers switch statement 
    4.Handling immutable updates in the reducers.
*/
