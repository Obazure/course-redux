import './styles.css'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { rootReducer } from './redux/rootReducer'
import { increment, decrement, asyncIncrement } from './redux/actions'

const store = createStore(
    rootReducer,
    0,
    applyMiddleware(thunk, logger)
)

const counter = document.getElementById('counter')
const btnAdd = document.getElementById('add')
const btnSub = document.getElementById('sub')
const btnAsync = document.getElementById('async')
const btnTheme = document.getElementById('theme')

btnAdd.addEventListener('click', () => {
    store.dispatch(increment())
})

btnSub.addEventListener('click', () => {
    store.dispatch(decrement())
})

btnAsync.addEventListener('click', () => {
    store.dispatch(asyncIncrement())
})

store.subscribe(() => {
    const state = store.getState()
    counter.textContent = state.toString()
})
store.dispatch({ type: 'INIT_APPLICATION' })


btnTheme.addEventListener('click', () => {
    // document.body.classList.toggle('dark')
    console.log('no theme change is here yet.')
})

