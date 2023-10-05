import { configureStore } from "@reduxjs/toolkit"
import rootReducer from "./reducer"

const store = configureStore({
  reducer: rootReducer,
})

export default store


// REDUX-THUNK
// import { configureStore, applyMiddleware } from "@reduxjs/toolkit"
// import thunk from "redux-thunk"

// import rootReducer from "./reducer"

// const middleware = [thunk]

// const store = configureStore({
//   reducer: rootReducer,
//   middleware,
// })

// export default store


// import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
// import rootReducer from './reducer'

// const store = createStore(
//   rootReducer,
//   applyMiddleware(thunk)
// )

// export default store

