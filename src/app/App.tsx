import { Provider } from 'react-redux'
import store from './store/store'
import './styles/reset.scss'

const App = () => {
  return (
    <Provider store={store}>
      <div>1</div>
    </Provider>
  )
}

export default App
