import {INCREMENT, DECREMENT, ASYNC_INCREMENT, CHANGE_THEME, DISABLE_BUTTONS, ENABLE_BUTTONS} from './types'

export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}

export const changeTheme = (newTheme) => {
    return {
        type: CHANGE_THEME,
        payload: newTheme
    }
}

export const enableButtons = () => {
    return {
        type: ENABLE_BUTTONS
    }
}

export const disableButtons = () => {
    return {
        type: DISABLE_BUTTONS
    }
}

export const asyncIncrement = () => {
    return function (dispatch) {
        dispatch(disableButtons())
        setTimeout(() => {
            dispatch({
                type: ASYNC_INCREMENT
            })
            dispatch(enableButtons())
        }, 2000)
    }
}
