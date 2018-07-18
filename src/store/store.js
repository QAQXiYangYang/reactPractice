import { createStore, applyMiddleware } from 'redux'
import themeReducer from '../reducers/index'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
//let store = createStore(themeReducer, composeWithDevTools())
let store = createStore(themeReducer,  applyMiddleware(logger))
export default store



// redux-logger 和  redux-devtools 只能用一个