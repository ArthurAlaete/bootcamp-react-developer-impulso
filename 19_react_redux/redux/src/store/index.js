import { createStore } from 'redux'
// createStore pega todos os reducers e montam na store
import reducers from './reducers'

export default createStore(reducers)
