import { createStore } from 'redux'

const SET_VALUE = 'SET_VALUE'

export function setValue(key, value) {
  return { type: SET_VALUE, key: key, value: value };
}

const initialState =  {}

export default function store(state = initialState, action){

    switch (action.type) {

        case SET_VALUE:
            var obj = Object.assign({}, state) // We must return a copy
            obj[action.key] = action.value;

            return obj;

        default :
            return state
    }
}
