import React from 'react'

const App = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  )
}

App.propTypes = {
  children: React.PropTypes.object.isRequired
}

export default App
