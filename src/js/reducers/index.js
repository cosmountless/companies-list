import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as companiesReducer } from './companies'

const reducers = combineReducers({
  form: formReducer,
  companies: companiesReducer,
});

export default reducers
