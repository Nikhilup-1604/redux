const redux = require('redux')

//For Immer

const produce = require('immer').produce


const initialState = {
    name:"NIck",
    address:{
        street:"123 Main St",
        city:"uk",
        state:"LA"
    },
}

const STREET_UPDATED = "STREET_UPDATED"
const updateStreet = (street)=>{
    return{
        type:STREET_UPDATED,
        payload:street
    }
}

const reducer = (state = initialState,action )=>{
    switch(action.type){
        case STREET_UPDATED:
            // return{
            //     ...state,
            //     address:{
            //         ...state.address,
            //         street:action.payload,
            //     },
            // }Using IMMER

            return produce(state,(draft)=>{
                draft.address.street = action
            })
            default:{
                return state;
            }    
    }
}

const store = redux.createStore(reducer)
console.log('Initial state',store.getState());
const unsubscribe = store.subscribe(()=>{
    console.log('Updated State',store.getState())
})

store.dispatch(updateStreet('456 Main St'))
unsubscribe()