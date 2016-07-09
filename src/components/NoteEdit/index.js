import React from 'react'

import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import AppBar from '../AppBar'
import NoteForm from '../NoteForm'

import { updateNote } from '../../actions/notesActions'
import { changeNote, resetNote, setNote } from '../../actions/noteActions'

const mapStateToProps = state => ({
  notes: state.notes,
  note: state.note
})
const mapDispatchToProps = (dispatch) => ({
  changeNote: (field, event) => {
    dispatch(changeNote(field, event.target.value))
  },
  setNote: (value) => {
    dispatch(setNote(value))
  },
  applyChanges: (id, note) => {
    dispatch(updateNote(id, note))
    dispatch(resetNote())
    dispatch(push('/'))
  }
})

export class Index extends React.Component {
  static propTypes = {
    params: React.PropTypes.object.isRequired,
    note: React.PropTypes.object,
    notes: React.PropTypes.arrayOf(React.PropTypes.object),
    applyChanges: React.PropTypes.func.isRequired,
    setNote: React.PropTypes.func.isRequired,
    changeNote: React.PropTypes.func.isRequired
  }

  get noteId() {
    return parseInt(this.props.params.id, 10)
  }

  componentWillMount() {
    this.props.setNote(this.props.notes[this.noteId])
  }

  render() {
    return (
      <div>
        <AppBar text='Edit Note' />
        <NoteForm
          note={this.props.note}
          applyChanges={this.props.applyChanges.bind(this, this.noteId)}
          changeNote={this.props.changeNote}
          button='Update'
        />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)

