import React from 'react'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'

const NotesBar = () => (
  <AppBar
    title="Notes"
    iconElementLeft={<div />}
    iconElementRight={<FlatButton label="Add" />}
  />
)

export default NotesBar
