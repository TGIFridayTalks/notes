import React from 'react'
import { connect } from 'react-redux'

import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

import { closeDialog } from '../../actions/dialogActions'

const mapStateToProps = state => ({
  open: state.dialog.open,
  meta: state.dialog.meta
})

const mapDispatchToProps = (dispatch) => {
  return {
    closeDialog: () => {
      dispatch(closeDialog())
    }
  }
}

export class DeleteDialog extends React.Component {
  handleRemove() {
    this.props.handleRemove(this.props.meta)
    this.props.closeDialog()
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.props.closeDialog}
      />,
      <FlatButton
        label="Delete"
        primary={true}
        onTouchTap={this.handleRemove.bind(this)}
      />,
    ]

    return (
      <Dialog
        actions={actions}
        modal={false}
        open={this.props.open}
        onRequestClose={this.props.closeDialog}
      >
        Delete note?
      </Dialog>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteDialog)
