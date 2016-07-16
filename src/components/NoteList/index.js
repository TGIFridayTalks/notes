import React from 'react'

import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import AppBar from './AppBar'
import NoteList from './NoteList'

import { openDialog } from '../../actions/dialogActions'
import { deleteNote } from '../../actions/notesActions'

const mapStateToProps = state => ({ notes: state.notes })
const mapDispatchToProps = (dispatch) => ({
  deleteNote: ({note}) => dispatch(deleteNote(note)),
  onMenuTouchTap: (e, child) => {
    switch(child.ref) {
    case 'read':
      dispatch(push(`/${child.props.note}`))
      break
    case 'edit':
      dispatch(push(`/${child.props.note}/edit`))
      break
    case 'delete':
      dispatch(openDialog({ note: child.props.note }))
      break
    // no default
    }
  }
})

export class Index extends React.Component {
  static propTypes = {
    notes: React.PropTypes.object,
    deleteNote: React.PropTypes.func.isRequired,
    onMenuTouchTap: React.PropTypes.func.isRequired
  }

  render() {
    return (
      <div>
        <AppBar />
        <NoteList {...this.props} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
