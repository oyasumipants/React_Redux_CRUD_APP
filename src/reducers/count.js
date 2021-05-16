import { INCREMENT, DECREMENT } from '../actions'

// state(状態の初期値を定義, オブジェクト)
const initialState = { value: 0 }

const counter = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return { value: state.value + 1 }
        case DECREMENT:
            return { value: state.value - 1 }
        default:
            return state
    }
}

export default counter
