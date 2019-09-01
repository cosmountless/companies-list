import React from 'react'
import { connect } from 'react-redux'
import { companyFormActions } from '../actions'
import { Link } from 'react-router-dom'
import CompanyForm from '../components/company-form/company-form'

/**
 * Поиск компании по id
 * @param {Array} companies Компании.
 * @param {number} companyId Идентификатор компании.
 */
const getCompanyById = (companies, companyId) => {
  return companies.find(company => {
    return company.id === Number(companyId)
  })
};

/**
 * Страница компаний.
 * @param {Object} props Свойства компонента.
 * @param {Object} props.match Данные о роуте.
 * @param {Object} props.match.params.id Идентификатор компании.
 * @param {Object} props.companies Данные компаний.
 */
const EditCompany = ({ companies, submitForm, match: { params: params } }) => {
  const company = getCompanyById(companies, Number(params.id));
  let content;
  if (typeof company === 'undefined') {
    content = (
      <div>
        <div>
          <Link to='/'>На главную</Link>
        </div>
        <div>Не найдена такая компания для редактирования</div>
      </div>
    )
  } else {
    content = (
      <div>
        <div>
          <Link to={`/company/${company.id}`}>К странице компании '{company.name}'</Link>
        </div>
        <CompanyForm company={company} submitForm={submitForm} />
      </div>
    )
  }
  return content;
};

function mapStateToProps (state) {
  return {
    companies: state.companies.items,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    submitForm: (formData) => dispatch(companyFormActions.submitFormAction(formData)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCompany)
