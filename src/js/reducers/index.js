import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as companiesReducer } from './companies'
import { reducer as companyFormReducer } from './company-form'

const reducers = combineReducers({
  companyForm: companyFormReducer,
  form: formReducer,
  companies: companiesReducer,
});

export default reducers
