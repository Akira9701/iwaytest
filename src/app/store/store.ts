import { AuthReducer } from '@/entities/auth'
import {
  AnyAction,
  combineReducers,
  configureStore,
  Store,
  ThunkDispatch,
} from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
  authorization: AuthReducer,
})

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage,
  },
  rootReducer,
)

const store = configureStore({
  reducer: persistedReducer, // Ваша логика редьюсера
  devTools: { trace: true, traceLimit: 25 }, // Настройка devTools с отслеживанием
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch<Args = any> = ThunkDispatch<RootState, Args, AnyAction>
export type AppStore = Omit<Store<RootState, AnyAction>, 'dispatch'> & {
  dispatch: AppDispatch
}
export const useAppDispatch: <Args = any>() => AppDispatch<Args> = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store
