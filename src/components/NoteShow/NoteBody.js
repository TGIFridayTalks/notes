import React from 'react'
import styles from './styles'

const NoteBody = ({note}) => {
  return (
    <div style={styles.noteBody}>
      {note.body}
    </div>
  )
}

export default NoteBody
