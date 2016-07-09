import React from 'react'
import AppBar from 'material-ui/AppBar'

const NoteBar = (props) => (
  <AppBar
    title={props.note.title}
    iconElementLeft={<div />}
    iconElementRight={<div />}
  />
)

NoteBar.propTypes = {
  note: React.PropTypes.object
}

export default NoteBar
