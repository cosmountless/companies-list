import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import Companies from '../components/companies'
import { withRouter } from 'react-router-dom'

/**
 * Компонент команий.
 * @parap {Object} props Свойства компонента.
 * @param {Array} props.companies Данные компаний.
 * @return {ReactElement}
 */
const App = ({ companies }) => (
  <div>
    <Companies companies={companies} />
  </div>
)

function mapStateToProps (state) {
  return {
    companies: state.companies.items,
    isFetching: state.companies.isFetching,
  }
}

export default connect(mapStateToProps)(App);
