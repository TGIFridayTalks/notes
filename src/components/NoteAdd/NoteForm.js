import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import { addNote } from '../../actions/notesActions'
import { changeNote, resetNote } from '../../actions/noteActions'

import styles from './styles'

const mapStateToProps = (state) => ({ note: state.note })
const mapDispatchToProps = (dispatch) => ({
  changeNote: (field, event) => {
    dispatch(changeNote(field, event.target.value))
  },
  addNote: (note) => {
    dispatch(addNote(note))
    dispatch(resetNote())
    dispatch(push('/'))
  }
})

const NoteForm = (props) => (
  <div style={styles.noteForm}>
    <TextField
      onChange={props.changeNote.bind(null, 'title')}
      value={props.note.title}
      hintText="Title"
    /><br />
    <TextField
      onChange={props.changeNote.bind(null, 'body')}
      value={props.note.body}
      hintText="Body"
      multiLine={true}
      rows={1}
    /><br />
    <RaisedButton
      onClick={props.addNote.bind(null, props.note)}
      label="Add"
      primary={true} />
  </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm)
