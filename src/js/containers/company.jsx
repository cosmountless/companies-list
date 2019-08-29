import React from 'react'
import { connect } from 'react-redux'

const Company = () => (
  <div>Edit company data route</div>
);

function mapStateToProps(state) {
  return {
    companies: state.companies,
  }
}

export default connect(mapStateToProps)(Company)
