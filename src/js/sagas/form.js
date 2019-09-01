import { call, put } from 'redux-saga/effects'
import { companyFormActions, companiesActions } from '../actions'

export function * submit (api, { data, history }) {
  const response = yield call(api.putCompany, data);
  if (response.ok) {
    put(companyFormActions.successResponse(response.data));
    yield put(companiesActions.putCompany(response.data));
    yield call(history.push, '/');
  } else {
    yield put(companyFormActions.failureResponse(response.errors));
  }
}
