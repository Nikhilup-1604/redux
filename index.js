const redux = require('redux')
const createStore = redux.createStore

//Bind Action Creators
const bindActionCreators = redux.bindActionCreators

//Combine reducers
const combineReducers = redux.combineReducers

//Middleware - Redux Logger
const applyMiddleware = redux.applyMiddleware  // include middleware
const reduxLogger=  require('redux-logger')  // require redux-logger
const logger = reduxLogger.createLogger()   // middleware

console.log("from index.js");


// --> 1.ACTIONS
const CAKE_ORDERED = "CAKE_ORDERED"

//RESTOCKING CAKES

const CAKE_RESTOCKED = 'CAKE_RESTOCKED'

//Action and action creator for ICE_CREAM

const ICECREAM_ORDERED = 'ICECREAM_ORDERED'
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED'

//Action Creator
function orderCake(){
    return {
        type:CAKE_ORDERED,
        payload:1
    }
}


//Action creator(Restocking cakes)
function restockCake(qty=1){
    return{
        type:CAKE_RESTOCKED,
        payload:qty ,
    }

}

//Action creator for ICE_CREAM  

function orderIceCream(qty=1){
    return{
        type:ICECREAM_ORDERED,
        payload:qty
    }
}

function restockIceCream(qty=1){
    return{
        type:ICECREAM_RESTOCKED,
        payload:qty ,
    }

}

//Initial State -->Combining both cakes and IceCreams
// const initialState = {
//     numOfCakes : 10,
//     // anotherProperty
//     numOfIceCreams:20
// }


//Separate state for cakes and IceCreams
//3.STATE

const initialCakeState = {
    numOfCakes:10
}

const initialIceCreamState = {
    numOfIceCreams:20
}



//--> 2.REDUCERS

//(previousState,state) => newState

// CAKE_REDUCER

const cakeReducer = (state = initialCakeState,action) =>{
    switch(action.type){
        case CAKE_ORDERED:
            return{
                ...state,
                numOfCakes : state.numOfCakes - 1
            }
        //Case for restocking cakes
        case CAKE_RESTOCKED:
            return{
                ...state,
                numOfCakes: state.numOfCakes + action.payload
            }
        default:
            return state;
        
    }
}

// ICE_CREAM REDUCER

const iceCreamReducer = (state = initialIceCreamState,action) =>{
    switch(action.type){
        case ICECREAM_ORDERED:
            return{
                ...state,
                numOfIceCreams : state.numOfIceCreams - 1
            }
        //Case for restocking iceCreams
        case ICECREAM_RESTOCKED:
            return{
                ...state,
                numOfIceCreams: state.numOfIceCreams + action.payload
            }
        // Case for video 23-Extra reducers
        case CAKE_ORDERED:
            return{
                ...state,
                numOfIceCreams:state.numOfIceCreams - 1,
            }
        default:
            return state;
    }
}


//COMBINING REDUCERS

const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer,
})

// --> 3.STORE
const store = createStore(rootReducer)

console.log("Initial state",store.getState())

 const unsubscribe = store.subscribe(() => {
    console.log("Updated state",store.getState());
 }) //console.log('Updated state' , store.getState()))

// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(restockCake(3))

//Bind Action creator

const actions=bindActionCreators({orderCake,restockCake,orderIceCream,restockIceCream},store.dispatch)

actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restockCake(3)

//For IceCreams

actions.orderIceCream()
actions.orderIceCream()

actions.restockIceCream(2)

unsubscribe();