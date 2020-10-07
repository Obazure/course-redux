import './styles.css'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import logger from 'redux-logger'
import {rootReducer} from './redux/reducers.js'
import {increment, decrement, asyncIncrement, changeTheme} from './redux/actions'

const store = createStore(
    rootReducer,
    0,
    composeWithDevTools(
        applyMiddleware(thunk, logger),
    )
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

btnTheme.addEventListener('click', () => {
    const newTheme = document.body.classList.contains('dark') ? 'light' : 'dark'
    store.dispatch(changeTheme(newTheme))
})

store.subscribe(() => {
    const state = store.getState()
    counter.textContent = state.counter.toString()
    document.body.className = state.theme.value

    const btnArr = [btnAdd, btnSub, btnTheme, btnAsync]
    btnArr.forEach(btn => {
        btn.disabled = state.disabled
    })
})
store.dispatch({type: 'INIT_APPLICATION'})
