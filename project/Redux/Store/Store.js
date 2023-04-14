import { createStore,applyMiddleware } from "redux";
import rootReducer from "../Reducer/Index";
// phlay hum persistReducer banaty hy then us ke bad persistStore banaty hy
import { persistStore, persistReducer } from 'redux-persist'
import storage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';
// key hum kuch be rakh saktay hy 
const persistConfig = {
    key: 'root',
    storage,
    // whitelist: ['UserDetailReducer']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer,applyMiddleware(thunk))
// console.log('Initial State',store.getState());
// store.subscribe(()=>console.log('Initial State using subscribe',store.getState()));

export const persistor = persistStore(store)
export default store;
