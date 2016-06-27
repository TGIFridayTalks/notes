import { makeActionCreator } from '../lib/utils'

export const NOTES_DELETE = 'NOTES_DELETE'

export const deleteNote = makeActionCreator(NOTES_DELETE, 'note')
