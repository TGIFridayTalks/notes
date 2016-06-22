import React, { Component } from 'react'
import AppBar from './AppBar'
import NoteList from './NoteList'

export default class App extends Component {
  render() {
    return (
      <div>
        <AppBar />
        <NoteList />
      </div>
    )
  }
}
