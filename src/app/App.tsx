import { Provider } from 'react-redux'
import '@/app/styles/index.scss'
import { AppRouter } from './routes/router'
import { store } from './store'

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}

export default App
