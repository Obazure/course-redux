import {combineReducers} from 'redux'
import {INCREMENT, DECREMENT, ASYNC_INCREMENT, CHANGE_THEME, DISABLE_BUTTONS, ENABLE_BUTTONS} from './types'

export function counterReducer(state = 0, action) {
    switch (action.type) {
        case INCREMENT:
            return state + 1
        case DECREMENT:
            return state - 1
        case ASYNC_INCREMENT:
            return state + 1
        default:
            return state
    }
}

const initialThemeState = {
    value: 'light'
}

export function themeReducer(state = initialThemeState, action) {
    switch (action.type) {
        case CHANGE_THEME:
            return {...state, value: action.payload}
        default:
            return state
    }
}


export function buttonDisableReducer(state = false, action) {
    switch (action.type) {
        case DISABLE_BUTTONS:
            return true
        case ENABLE_BUTTONS:
            return false
        default:
            return state
    }
}

export const rootReducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer,
    disabled: buttonDisableReducer
})
