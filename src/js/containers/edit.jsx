import React from 'react'
import { connect } from 'react-redux'
import { companyFormActions } from '../actions'

const EditCompany = () => (
  <div>Edit company data route</div>
);

function mapStateToProps (state) {
  return {
    companies: state.companies,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    submitForm:  (formData) => dispatch(companyFormActions.submitFormAction()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCompany)
