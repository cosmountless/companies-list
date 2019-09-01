import { call } from 'redux-saga/effects'

export function * submit (api, data) {
  const response = yield call(api, data);
  if (response.ok) {
  }
}
