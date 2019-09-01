import React, { useEffect } from 'react';
import styles from './app.scss';
import { connect } from 'react-redux'
import { companiesActions } from '../actions'
import Companies from '../components/companies'

/**
 * Компонент команий.
 * @parap {Object} props Свойства компонента.
 * @param {Array} props.companies Компании.
 * @returns {ReactElement}
 */
const App = ({ companies, requestCompanies, isFetching }) => {
  useEffect(() => {
    requestCompanies()
  }, []);

  return (
    <div className={styles.wrapper}>
      Приложение список компаний
      {isFetching
        ? (
          <div>загрузка...</div>
        )
        : Array.isArray(companies) && Boolean(companies.length) && (
            <Companies companies={companies} />
        )
      }
    </div>
  );
};

function mapStateToProps (state) {
  return {
    companies: state.companies.items,
    isFetching: state.companies.isFetching,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    requestCompanies: () => dispatch(companiesActions.requestCompanies())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
