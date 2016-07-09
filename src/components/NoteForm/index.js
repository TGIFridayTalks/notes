import React from 'react'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import styles from './styles'

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

export default NoteForm
