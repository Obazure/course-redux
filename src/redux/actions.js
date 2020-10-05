import { INCREMENT, DECREMENT, ASYNC_INCREMENT } from './types'

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

export const asyncIncrement = () => {
    return function (dispatch) {
        setTimeout(() => {
            dispatch({
                type: ASYNC_INCREMENT
            })
        }, 2000)

    }
}
