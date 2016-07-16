import { makeActionCreator } from '../lib/utils'

export const NOTES_DELETE = 'NOTES_DELETE'
export const NOTES_ADD = 'NOTES_ADD'

export const NOTES_LOAD_REQUEST = 'NOTES_LOAD_REQUEST'
export const NOTES_LOAD_SUCCEED = 'NOTES_LOAD_SUCCEED'

export const NOTES_ADD_REQUEST = 'NOTES_ADD_REQUEST'
export const NOTES_ADD_SUCCEED = 'NOTES_ADD_SUCCEED'

export const NOTES_UPDATE_REQUEST = 'NOTES_UPDATE_REQUEST'
export const NOTES_UPDATE_SUCCEED = 'NOTES_UPDATE_SUCCEED'

export const deleteNote = makeActionCreator(NOTES_DELETE, 'note')

// Saga actions
export const loadNotes = makeActionCreator(NOTES_LOAD_REQUEST)
export const addNote = makeActionCreator(NOTES_ADD_REQUEST, 'value')
export const updateNote = makeActionCreator(NOTES_UPDATE_REQUEST, 'id', 'value')

// Saga action results
export const loadNotesSucceed = makeActionCreator(NOTES_LOAD_SUCCEED, 'value')
export const addNoteSucceed = makeActionCreator(NOTES_ADD_SUCCEED, 'id', 'value')
export const updateNoteSucceed = makeActionCreator(NOTES_UPDATE_SUCCEED, 'id', 'value')
