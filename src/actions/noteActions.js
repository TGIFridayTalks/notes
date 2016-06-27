import { makeActionCreator } from '../lib/utils'

export const NOTE_CHANGE = 'NOTE_CHANGE'
export const NOTE_RESET = 'NOTE_RESET'

export const changeNote = makeActionCreator(NOTE_CHANGE, 'field', 'value')
export const resetNote = makeActionCreator(NOTE_RESET)
