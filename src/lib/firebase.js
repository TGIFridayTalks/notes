import firebase from 'firebase'

export const config = {
  apiKey: 'AIzaSyDBNyFXdED4SWfXncRoooatibIqC2KW1uw',
  authDomain: 'notes-82782.firebaseapp.com',
  databaseURL: 'https://notes-82782.firebaseio.com',
  storageBucket: 'notes-82782.appspot.com'
}

export const Firebase = firebase.initializeApp(config)

export default Firebase.database().ref('notes')
