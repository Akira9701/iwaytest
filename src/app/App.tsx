import { Provider } from 'react-redux'
import '@/app/styles/index.scss'
import { AppRouter } from './routes/'
import { store } from './store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './store/store'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRouter />
      </PersistGate>
    </Provider>
  )
}

export default App
