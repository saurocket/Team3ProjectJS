
const CHANGE_INPUT_EVENTS = 'CHANGE_INPUT_EVENTS'

const initialState = {
  actualEvents: [],
  inputTitle: 'Hello wo'
}



export const formReducer = (state=initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT_EVENTS: return {...state, inputTitle: action.value}
    default: return state
  }

}

export const onInputEventActionCreator = (value) => {
  return {
    type: CHANGE_INPUT_EVENTS,
    value: value
  }
}