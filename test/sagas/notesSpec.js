import { expect } from 'chai'
import { takeEvery } from 'redux-saga'
import { put, call } from 'redux-saga/effects'

import database from '../../src/lib/firebase'
import { loadNotes, addNote, updateNote } from '../../src/sagas/notes'
import { loadNotesSucceed, addNoteSucceed, updateNoteSucceed } from '../../src/actions/notesActions'

describe("#loadNotes", () => {
  it("should load notes", () => {
    const generator = loadNotes()
    const snapshot = {
      val: () => {}
    }
    const notes = []

    expect(generator.next().value).to.deep.equal(call([database, database.once], 'value'))
    expect(generator.next(snapshot).value).to.deep.equal(call([snapshot, snapshot.val]))
    expect(generator.next(notes).value).to.deep.equal(put(loadNotesSucceed(notes)))
  })
})

describe("#addNote", () => {
  it("should add note", () => {
    const value = []
    const generator = addNote({value})
    const newRef = {
      key: () => {}
    }

    expect(generator.next().value).to.deep.equal(call([database, database.push], value))
    expect(generator.next(newRef).value).to.deep.equal(put(addNoteSucceed(newRef.key, value)))
  })
})

describe("#updateNote", () => {
  it("should update note", () => {
    const [ id, value ] = [ 1, [] ]
    const generator = updateNote({id, value})
    const noteRef = {
      update: () => {}
    }

    expect(generator.next().value).to.deep.equal(call([database, database.child], id))
    expect(generator.next(noteRef).value).to.deep.equal(call([noteRef, noteRef.update], value))
    expect(generator.next().value).to.deep.equal(put(updateNoteSucceed(id, value)))
  })
})
