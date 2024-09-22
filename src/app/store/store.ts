import { AuthReducer } from '@/entities/auth'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

const mainReducer = combineReducers({
  authorization: AuthReducer,
})

const store = configureStore({
  reducer: mainReducer,
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

export default store
