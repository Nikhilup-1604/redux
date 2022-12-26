const configureStore = require('@reduxjs/toolkit').configureStore
// Logger middleware

//const reduxLogger = require('redux-logger')
const cakeReducer = require("../features/cakes/cakeSlice")
const iceCreamReducer = require("../features/cakes/icecreams/icecreamSlice")
//const { getDefaultMiddleware } = require('@reduxjs/toolkit')

//const logger = reduxLogger.createLogger()
const store = configureStore({
    reducer:{
        cake:cakeReducer,
        icecream:iceCreamReducer,
    },
    //middleware
    //comment in video 23 (extra reducers)//middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

module.exports = store