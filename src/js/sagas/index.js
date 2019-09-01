import { all, takeLatest } from 'redux-saga/effects'
import * as formSagas from './form'
import * as companiesSagas from './companies'
import { FORM_TYPES, COMPANIES_TYPES } from '../types'

export function createSagaWatcher (api) {
  return () => watcherSaga(api)
}

/**
 * Сага-наблюдатель
 * @param {Object} api Объект api методов.
 */
function * watcherSaga (api) {
  yield all([
    takeLatest(FORM_TYPES.SUBMIT, formSagas.submit, api),
    takeLatest(COMPANIES_TYPES.REQUEST, companiesSagas.requestCompanies, api),
  ])
}
