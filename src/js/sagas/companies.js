import { call, put } from 'redux-saga/effects'
import { companiesActions } from '../actions'

export function * requestCompanies (api) {
  const response = yield call(api.getCompanies);
  if (response.ok) {
    yield put(companiesActions.successResponse(response.data))
  } else {
    yield put(companiesActions.failureResponse(response.error))
  }
}
