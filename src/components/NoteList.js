import React from 'react'
import { connect } from 'react-redux'

import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import {grey400} from 'material-ui/styles/colors'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'

const mapStateToProps = state => ({ notes: state.notes })

const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
)

const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Read</MenuItem>
    <MenuItem>Delete</MenuItem>
  </IconMenu>
)

const mapNotesToItems = (notes) => notes.map((note, index) => (
  <div key={index}>
    <ListItem
      rightIconButton={rightIconMenu}
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
  <List>
    {mapNotesToItems(props.notes)}
  </List>
)

export default connect(mapStateToProps)(NoteList)
