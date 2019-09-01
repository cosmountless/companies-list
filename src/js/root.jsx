import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import App from './containers/app'
import Company from './containers/company'
import Edit from './containers/edit'
import { connect } from 'react-redux'
import { companiesActions } from './actions'
import styles from './root.scss'

/**
 * Корневой компонент.
 * @params {Object} props Свойства компонента.
 * @params {Function} requestCompanies Запрос компаний.
 * @params {boolean} isFetched Признак, что компании были запрошены.
 * @return {ReactElement}
 */
const Root = ({ requestCompanies, isFetched }) => {
  useEffect(() => {
    if (!isFetched) {
      requestCompanies()
    }
  }, []);
  return (
    <div className={styles.limit}>
      <div className={styles.reducer}>
        <h1>List companies app</h1>
        {isFetched
          ? (
              <Switch>
                <Route exact path='/' component={App} />
                <Route path='/company/edit/:id' component={Edit} />
                <Route path='/company/:id' component={Company} />
              </Switch>
            )
          : (
            <div>Загрузка компаний...</div>
          )
        }
      </div>
    </div>
  )
};

function mapStateToProps (state) {
  return {
    isFetched: state.companies.isFetched,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    requestCompanies: () => dispatch(companiesActions.requestCompanies())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Root)
