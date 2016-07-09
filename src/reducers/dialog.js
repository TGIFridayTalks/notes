import { DIALOG_CLOSE, DIALOG_OPEN } from '../actions/dialogActions'

const initialState = {
  open: false,
  meta: {}
}

export default function dialog(state = initialState, action) {
  switch(action.type) {
  case DIALOG_OPEN:
    return {
      ...state,
      open: true,
      meta: action.meta
    }
  case DIALOG_CLOSE:
    return {...state, open: false}
  default:
    return state
  }
}
