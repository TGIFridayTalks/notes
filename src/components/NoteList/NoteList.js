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

const mapStateToProps = state => ({ notes: state.notes })
const mapDispatchToProps = (dispatch) => {
  return {
    onMenuTouchTap: (e, child) => {
      dispatch(push(`/${child.props.note}`))
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
  <List>
    {mapNotesToItems(props.notes, props.onMenuTouchTap)}
  </List>
)

export default connect(mapStateToProps, mapDispatchToProps)(NoteList)