/* eslint no-multi-str: "allow" */

import {
  NOTES_DELETE,
  NOTES_ADD_SUCCEED,
  NOTES_UPDATE_SUCCEED,
  NOTES_LOAD_SUCCEED
} from '../actions/notesActions'

const initialState = {}

export default function notes(state = initialState, action) {
  switch (action.type) {
  case NOTES_LOAD_SUCCEED:
    return action.value
  case NOTES_DELETE:
    return state.filter((_, i) => i !== action.note)
  case NOTES_ADD_SUCCEED:
  case NOTES_UPDATE_SUCCEED:
    return {...state, [action.id]: action.value}
  default:
    return state
  }
}
