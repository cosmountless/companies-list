import React from 'react'

/**
 * Компонент списка команий.
 * @param {Array} companies Данные компаний.
 */
const Companies = ({ companies = [] }) => (
  <div>
    {companies.map(({ id, name, ogrn, type, registration_date, is_active }) => (
      <div key={id}>
        {id} {name} {ogrn} {type} {registration_date} {!is_active && 'не'} активна
      </div>
    ))}
  </div>
);

export default Companies
