import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

import {
  NOTES_LOAD_REQUEST,
  NOTES_ADD_REQUEST,
  NOTES_UPDATE_REQUEST,
  loadNotesSucceed,
  addNoteSucceed,
  updateNoteSucceed
} from '../actions/notesActions'
import database from '../lib/firebase'

export function *loadNotes() {
  // database.once('value').then((snapshot) => {})
  const snapshot = yield call([database, database.once], 'value')
  const notes = yield call([snapshot, snapshot.val])
  yield put(loadNotesSucceed(notes))
}

export function *addNote({value}) {
  const newRef = yield call([database, database.push], value)
  yield put(addNoteSucceed(newRef.key, value))
}

export function *updateNote({id, value}) {
  const noteRef = yield call([database, database.child], id)
  yield call([noteRef, noteRef.update], value)
  yield put(updateNoteSucceed(id, value))
}

export function *watchNotesActions() {
  yield [
    takeEvery(NOTES_LOAD_REQUEST, loadNotes),
    takeEvery(NOTES_ADD_REQUEST, addNote),
    takeEvery(NOTES_UPDATE_REQUEST, updateNote)
  ]
}
