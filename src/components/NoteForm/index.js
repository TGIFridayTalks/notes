import React from 'react'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import styles from './styles'

const NoteForm = (props) => (
  <div style={styles.noteForm}>
    <TextField
      onChange={props.changeNote.bind(null, 'title')}
      value={props.note.title}
      hintText='Title'
    /><br />
    <TextField
      onChange={props.changeNote.bind(null, 'body')}
      value={props.note.body}
      hintText='Body'
      multiLine={true}
      rows={5}
    /><br />
    <RaisedButton
      onClick={props.applyChanges.bind(null, props.note)}
      label={props.button || 'Add'}
      primary={true} />
  </div>
)

NoteForm.propTypes = {
  note: React.PropTypes.object.isRequired,
  changeNote: React.PropTypes.func.isRequired,
  applyChanges: React.PropTypes.func.isRequired,
  button: React.PropTypes.string
}

export default NoteForm
