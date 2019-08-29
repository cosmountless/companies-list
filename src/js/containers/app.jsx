import React from 'react';
import styles from './app.scss';
import { connect } from 'react-redux'

const App = ({ companies }) => (
  <div className={styles.wrapper}>
    Приложение список компаний
    {Array.isArray(companies) && companies.map(({ id, name, ogrn, type, registration_date, is_active }) => (
      <div key={id}>
        {id} {name} {ogrn} {type} {registration_date} {!is_active && 'не'} активна
      </div>
    ))}
  </div>
);

function mapStateToProps (state) {
  return {
    companies: state.companies,
  }
}

export default connect(mapStateToProps)(App);
