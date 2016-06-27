import { NOTE_CHANGE, NOTE_RESET } from '../actions/noteActions'
const initialState = {
  title: '',
  body: ''
}

export default function note(state=initialState, action) {
  switch (action.type) {
    case NOTE_CHANGE:
      return { ...state, [action.field]: action.value }
    case NOTE_RESET:
      return initialState
    default:
      return state
  }
}