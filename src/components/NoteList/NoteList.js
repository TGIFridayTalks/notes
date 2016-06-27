import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import {grey400} from 'material-ui/styles/colors'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'

import { openDialog } from '../../actions/dialogActions'
import { deleteNote } from '../../actions/notesActions'
import DeleteDialog from './DeleteDialog'

const mapStateToProps = state => ({ notes: state.notes })
const mapDispatchToProps = (dispatch) => {
  return {
    deleteNote: ({note}) => dispatch(deleteNote(note)),
    onMenuTouchTap: (e, child) => {
      switch(child.ref) {
        case "read":
          dispatch(push(`/${child.props.note}`))
          break
        case "delete":
          dispatch(openDialog({ note: child.props.note }))
      }
    }
  }
}

const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
)

const rightIconMenu = (id, touchTapHandler) => (
  <IconMenu
    iconButtonElement={iconButtonElement}
    onItemTouchTap={ touchTapHandler }
  >
    <MenuItem ref="read" note={id}>Read</MenuItem>
    <MenuItem ref="delete" note={id}>Delete</MenuItem>
  </IconMenu>
)

const mapNotesToItems = (notes, touchTapHandler) => notes.map((note, index) => (
  <div key={index}>
    <ListItem
      rightIconButton={rightIconMenu(index, touchTapHandler)}
      primaryText={note.title}
      secondaryText={
        <p>
          {note.body}
        </p>
      }
    />
    <Divider />
  </div>
))


export const NoteList = (props) => (
  <div>
    <DeleteDialog handleRemove={props.deleteNote} />
    <List>
      {mapNotesToItems(props.notes, props.onMenuTouchTap)}
    </List>
  </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(NoteList)
