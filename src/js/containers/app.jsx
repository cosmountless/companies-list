import React, { useEffect } from 'react';
import styles from './app.scss';
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
  <div className={styles.wrapper}>
    <Companies companies={companies} />
  </div>
)

function mapStateToProps (state) {
  return {
    companies: state.companies.items,
    isFetching: state.companies.isFetching,
  }
}

export default withRouter(connect(mapStateToProps)(App));
