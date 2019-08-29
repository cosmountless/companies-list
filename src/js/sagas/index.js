import { all, takeLatest } from 'redux-saga/effects'
import * as formSagas from './form'
import { FORM_TYPES } from '../types'

export function createSagaWatcher (api) {
  return () => watcherSaga(api)
}

function * watcherSaga (api) {
  yield all([
    takeLatest(FORM_TYPES.submit, formSagas.submit, api)
  ])
}
