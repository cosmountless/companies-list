import React from 'react'
import Company from './company'

/**
 * Компонент списка команий.
 * @param {Array} companies Данные компаний.
 * @return {ReactElement}
 */
const Companies = ({ companies = [] }) => (
  <div>
    {companies.map((company, index) => (
      <Company key={index} company={company} />
    ))}
  </div>
);

export default Companies
