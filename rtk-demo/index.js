const store = require('./app/store')
console.log("Initial state ",store.getState());

// To get cakeActions we need to import it from cakeSlice.js
const cakeActions = require('./features/cakes/cakeSlice').cakeActions

// To get iceCream actions we need to import it from icecreamSlice.js

const icecreamActions = require("./features/cakes/icecreams/icecreamSlice").icecreamActions
const unsubscribe = store.subscribe(()=>{
    console.log("Updated state",store.getState())
})

store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked(3))


store.dispatch(icecreamActions.ordered())
store.dispatch(icecreamActions.ordered())
store.dispatch(icecreamActions.restocked(2))

unsubscribe()