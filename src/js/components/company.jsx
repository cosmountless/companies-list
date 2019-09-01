import React from 'react'
import { Link } from 'react-router-dom'

/**
 * Компонент компании.
 * @param {number} id Идентификатор компании.
 * @param {string} name Имя компании.
 * @param {number} ogrn Огрн.
 * @param {('ИП'|'ООО')} type Типа компании.
 * @param {string} registration_date Дата регистрации.
 * @param {boolean} is_active Признак активна/не активна компания.
 * @return {ReactElement}
 */
const Company = ({ company: { id, name, ogrn, type, registration_date, is_active } }) => (
  <div>
    <Link to={`/company/${id}`}>
      {id} {name} {ogrn} {type} {registration_date} {!is_active && 'не'} активна
    </Link>>
  </div>
);

export default Company
