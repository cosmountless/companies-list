import React, { useEffect } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import App from './containers/app'
import Company from './containers/company'
import Edit from './containers/edit'
import { connect } from 'react-redux'
import { companiesActions } from './actions'

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
    <div>
      <div>List companies app</div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Root))
