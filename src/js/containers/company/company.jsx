import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import styles from './company.scss'

/**
 * Поиск компании по id
 * @param {Array} companies Компании.
 * @param {number} companyId Идентификатор компании.
 */
const getCompanyById = (companies, companyId) => {
  return companies.find(company => {
    return company.id === companyId
  })
};

/**
 * Страница компании.
 * @param {Object} props Свойства компонента.
 * @param {Array} props.companies Данные компаний.
 * @param {Object} props.match Данные о роуте.
 * @param {Object} props.match.params.id Идентификатор компании.
 * @return {ReactElement}
 */
const Company = ({ companies, match: { params: params } }) => {
  const company = getCompanyById(companies, Number(params.id));
  let content;
  if (typeof company === 'undefined') {
    content = (
      <div>
        <Link className={styles['like-button']} to='/' children='На главную' replace />
        <div>Компании не найдено</div>
      </div>
    )
  } else {
    const { id, name, ogrn, type, registration_date, is_active } = company;
    content = (
      <div>
        <Link className={styles['like-button']} to='/' children='На главную' />
        <div className={styles.company}>
          <div>id: {id}</div>
          <div>Название: {name}</div>
          <div>Огрн: {ogrn}</div>
          <div>Тип компании: {type}</div>
          <div>Дата регистрации: {registration_date}</div>
          <div>Стаутус: {!is_active && 'не '}активна</div>
          <Link className={styles['like-button']} to={`/company/edit/${id}`} children='Редактировать' />
        </div>
      </div>
    )
  }
  return content;
};

function mapStateToProps(state) {
  return {
    companies: state.companies.items,
  }
}

export default connect(mapStateToProps)(Company)
