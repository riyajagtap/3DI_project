import {createStore} from 'redux'
//  import logger from 'redux-logger'
//  import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './rootReducer'

const store = createStore(rootReducer)

export default store