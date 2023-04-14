import UserReducer from '../Reducer/UserReducer'

import { combineReducers } from 'redux'

const rootReducer=combineReducers({
    USER:UserReducer,
    
})
export default rootReducer;