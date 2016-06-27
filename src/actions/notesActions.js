import { makeActionCreator } from '../lib/utils'

export const NOTES_DELETE = 'NOTES_DELETE'
export const NOTES_ADD = 'NOTES_ADD'

export const deleteNote = makeActionCreator(NOTES_DELETE, 'note')
export const addNote = makeActionCreator(NOTES_ADD, 'note')
