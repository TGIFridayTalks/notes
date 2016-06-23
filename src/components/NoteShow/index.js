import React from 'react'
import { connect } from 'react-redux'

import AppBar from './AppBar'
import NoteBody from './NoteBody'

const mapStateToProps = state => ({
  notes: state.notes
})

export const Index = ({params, notes}) => {
  const note = notes[parseInt(params['id'])]

  return (
    <div>
      <AppBar note={note} />
      <NoteBody note={note} />
    </div>
  )
}

export default connect(mapStateToProps)(Index)
