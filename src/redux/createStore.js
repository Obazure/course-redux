export function createStore(rootReducer, intialState) {
    let state = rootReducer(intialState, {type: '__INIT__'})
    const subscribers = []

    return {
        dispatch(action) {
            state = rootReducer(state, action)
            subscribers.forEach(sub => sub())
        },
        subscribe(callback) {
            subscribers.push(callback)
        },
        getState() {
            return state
        }
    }
}