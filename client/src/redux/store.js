import {combineReducers, configureStore } from "@reduxjs/toolkit"
import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore} from "redux-persist";
import sidebarReducer from "./slices/sidebarSlice"
import chartReducer from "./slices/chartSlice"
import globalParamsReducer from "./slices/globalParams"
import topDataReducer from "./slices/topData"


const rootReducer = combineReducers({
    sidebar:sidebarReducer,
    chart:chartReducer,
    globalParams:globalParamsReducer,
    topData:topDataReducer
})

const persistConfig = {
    key:"root",
    storage,
    version:1,
    blacklist:["topdata"]
   
}

const persistedReducer = persistReducer(persistConfig,rootReducer);

 const  store = configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
        serializableCheck:false,
        immutableCheck:false
    }),
});

const persistor = persistStore(store);

export {store , persistor}