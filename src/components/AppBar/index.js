import React from 'react'

import AppBar from 'material-ui/AppBar'

const Bar = ({text}) => (
  <AppBar
    title={text}
    iconElementLeft={<div />}
    iconElementRight={<div />}
  />
)

Bar.propTypes = {
  text: React.PropTypes.string
}

export default Bar
