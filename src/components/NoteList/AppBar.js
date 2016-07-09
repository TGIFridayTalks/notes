import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'

const mapStateToProps = () => ({})
const mapDispatchToProps = (dispatch) => ({
  onAddClick: () => dispatch(push('/add'))
})

export const NotesBar = (props) => (
  <AppBar
    title="Notes"
    iconElementLeft={<div />}
    iconElementRight={<FlatButton onClick={props.onAddClick} label="Add" />}
  />
)

NotesBar.propTypes = {
  onAddClick: React.PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesBar)
