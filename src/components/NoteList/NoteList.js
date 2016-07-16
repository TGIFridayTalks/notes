import React from 'react'

import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import {grey400} from 'material-ui/styles/colors'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'

import DeleteDialog from './DeleteDialog'

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
    <MenuItem ref="edit" note={id}>Edit</MenuItem>
    <MenuItem ref="delete" note={id}>Delete</MenuItem>
  </IconMenu>
)

const mapNotesToItems = (notes, touchTapHandler) => Object.keys(notes).map((id) => (
  <div key={id}>
    <ListItem
      rightIconButton={rightIconMenu(id, touchTapHandler)}
      primaryText={notes[id].title}
      secondaryText={
        <p>
          {notes[id].body}
        </p>
      }
    />
    <Divider />
  </div>
))

const NoteList = (props) => (
  <div>
    <DeleteDialog handleRemove={props.deleteNote} />
    <List>
      {mapNotesToItems(props.notes, props.onMenuTouchTap)}
    </List>
  </div>
)

NoteList.propTypes = {
  notes: React.PropTypes.object,
  deleteNote: React.PropTypes.func.isRequired,
  onMenuTouchTap: React.PropTypes.func.isRequired
}

export default NoteList
