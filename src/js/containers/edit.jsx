import React from 'react'
import { connect } from 'react-redux'
import { submitAction } from '../actions'

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
    submitForm:  (formData) => dispatch(submitAction()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCompany)
