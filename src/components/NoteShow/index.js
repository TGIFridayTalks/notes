import React from 'react'
import { connect } from 'react-redux'

import AppBar from './AppBar'
import NoteBody from './NoteBody'

const mapStateToProps = state => ({
  notes: state.notes
})

export const Index = ({params, notes}) => {
  const note = notes[parseInt(params.id, 10)]

  return (
    <div>
      <AppBar note={note} />
      <NoteBody note={note} />
    </div>
  )
}

Index.propTypes = {
  params: React.PropTypes.object.isRequired,
  notes: React.PropTypes.arrayOf(React.PropTypes.object)
}

export default connect(mapStateToProps)(Index)
