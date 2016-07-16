import { watchNotesActions } from './notes'

export default function *rootSaga() {
  yield [
    watchNotesActions()
  ]
}
