import React from 'react'
import { Link } from 'react-router-dom'
import styles from './company.scss'

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
  <div className={styles.wrapper}>
    <Link to={`/company/${id}`}>
      <div>
        <div>id: {id}</div>
        <div>Название: {name}</div>
        <div>ОГРН: {ogrn}</div>
        <div>Тип компании: {type}</div>
        <div>Дата регистрации: {registration_date}</div>
        <div>Стаутус: {!is_active && 'не '}активна</div>
      </div>
    </Link>
  </div>
);

export default Company
