import React from 'react'
import { connect } from 'react-redux'

import AppBar from 'material-ui/AppBar'

const NoteBar = (props) => (
  <AppBar
    title='Add New Note'
    iconElementLeft={<div />}
    iconElementRight={<div />}
  />
)

export default NoteBar
