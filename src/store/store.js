import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/themeColor'
//import rootReducer from '../reducers/index'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
// redux-devtool
//let store = createStore(rootReducer, composeWithDevTools())
//redux-logger
let store = createStore(rootReducer,  applyMiddleware(logger))
export default store



// redux-logger 和  redux-devtools 只能用一个
