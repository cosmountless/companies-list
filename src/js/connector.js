import App from './containers/app'
import { connect } from 'react-redux'
import { submitAction } from './actions'

function mapStateToProps (state) {
  return {
    companies: state.companies,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    submitForm:  (formData) => dispatch(submitAction()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
