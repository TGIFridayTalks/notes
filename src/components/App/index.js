import React from 'react'
import { connect } from 'react-redux'
import { loadNotes } from '../../actions/notesActions'

const mapDispatchToProps = (dispatch) => ({
  loadNotes: () => dispatch(loadNotes())
})

export class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.object.isRequired,
    loadNotes: React.PropTypes.func.isRequired
  }

  componentWillMount() {
    this.props.loadNotes()
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(App)
