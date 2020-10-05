import './styles.css'
import {createStore} from './redux/createStore'
import {rootReducer} from './redux/rootReducer'

const store = createStore(rootReducer, 0)

const counter = document.getElementById('counter')
const btnAdd = document.getElementById('add')
const btnSub = document.getElementById('sub')
const btnAsync = document.getElementById('async')
const btnTheme = document.getElementById('theme')

btnAdd.addEventListener('click', ()=>{
    store.dispatch({type: 'INCREMENT'})
})

btnSub.addEventListener('click', ()=>{
    store.dispatch({type: 'DECREMENT'})
})

store.subscribe(()=>{
    const state = store.getState()
    counter.textContent = state.toString()
})
store.dispatch({type: 'INIT_APPLICATION'})

btnAsync.addEventListener('click', ()=>{
    console.log('no async task is here yet.')    
})

btnTheme.addEventListener('click', ()=>{
    // document.body.classList.toggle('dark')
    console.log('no theme change is here yet.')
})

