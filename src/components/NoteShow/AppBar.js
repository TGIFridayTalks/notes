import React from 'react'
import AppBar from 'material-ui/AppBar'

const NoteBar = (props) => (
  <AppBar
    title={props.note.title}
    iconElementLeft={<div />}
    iconElementRight={<div />}
  />
)

export default NoteBar
