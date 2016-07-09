import React from 'react'

import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import AppBar from '../AppBar'
import NoteForm from '../NoteForm'

import { addNote } from '../../actions/notesActions'
import { changeNote, resetNote } from '../../actions/noteActions'

const mapStateToProps = (state) => ({ note: state.note })
const mapDispatchToProps = (dispatch) => ({
  changeNote: (field, event) => {
    dispatch(changeNote(field, event.target.value))
  },
  applyChanges: (note) => {
    dispatch(addNote(note))
    dispatch(resetNote())
    dispatch(push('/'))
  }
})

export const Index = (props) => {
  return (
    <div>
      <AppBar text='Add New Note' />
      <NoteForm {...props} />
    </div>
  )
}

Index.propTypes = {
  note: React.PropTypes.object.isRequired,
  applyChanges: React.PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
