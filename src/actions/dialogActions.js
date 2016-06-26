import { makeActionCreator } from '../lib/utils'

export const DIALOG_OPEN = 'DIALOG_OPEN'
export const DIALOG_CLOSE = 'DIALOG_CLOSE'

export const openDialog = makeActionCreator(DIALOG_OPEN, 'meta')
export const closeDialog = makeActionCreator(DIALOG_CLOSE)
