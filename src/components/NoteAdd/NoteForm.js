import React from 'react'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';

import styles from './styles'

const NoteForm = () => (
  <div style={styles.noteForm}>
    <TextField
      hintText="Title"
    /><br />
    <TextField
      hintText="Body"
      multiLine={true}
      rows={1}
    /><br />
    <RaisedButton label="Add" primary={true} />
  </div>
)

export default NoteForm
