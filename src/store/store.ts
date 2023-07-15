import { configureStore, combineReducers } from "@reduxjs/toolkit"
import theme from './technicalSlice/theme'
import { user } from "./user/user"

const technicalReducer = combineReducers({theme})
const userReducer = combineReducers({user})

const rootReducer = combineReducers({technicalReducer, userReducer})

export const store = configureStore({
	reducer: rootReducer
})

export type AppDispatch = typeof store.dispatch
export type AppSelector = ReturnType<typeof store.getState>