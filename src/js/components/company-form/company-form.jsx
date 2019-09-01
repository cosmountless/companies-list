import React, { useEffect } from 'react'
import { Field, reduxForm } from 'redux-form'
import styles from './company-form.scss'

/**
 * Компонент формы компании.
 * @param {Object} company Данные компании для инициализации формы.
 * @param {Function} submitForm Функция подтверждения формы.
 * @param {Function} handleSubmit Обработчик подтверждения формы redux-form prop.
 * @param {boolean} submitting Признак процесса подтверждения формы redux-form prop.
 * @param {Function} initialize Функция инициализации данных формы redux-form prop.
 * @return {ReactElement}
 */
const CompanyForm = ({ company, submitForm, handleSubmit, submitting, initialize }) => {
  useEffect(() => {
    initialize(company);
  }, []);
  return (
    <form>
      <div>
        <label className={styles.label} htmlFor='id'>Идентификатор: </label>
        <Field
          name='id'
          component='input'
          type='text'
        />
      </div>
      <div>
        <label className={styles.label} htmlFor='name'>Наименование: </label>
        <Field
          name='name'
          component='input'
          type='text'
        />
      </div>
      <div>
        <label className={styles.label} htmlFor='ogrn'>ОГРН: </label>
        <Field
          name='ogrn'
          component='input'
          type='text'
        />
      </div>
      <div>
        <label className={styles.label} htmlFor='type'>Тип компании: </label>
        <Field
          name='type'
          component='input'
          type='text'
        />
      </div>
      <div>
        <label className={styles.label} htmlFor='registration_date'>Дата регистрации: </label>
        <Field
          name='registration_date'
          component='input'
          type='text'
        />
      </div>
      <div>
        <label className={styles.label} htmlFor='is_active'>Статус компании: </label>
        <Field
          name='is_active'
          component='input'
          type='checkbox'
        />
      </div>
        <button
          type='submit'
          onClick={handleSubmit(submitForm)}
          disabled={submitting}
        >
          Подтвердить
        </button>
    </form>
  )
};

export default reduxForm({ form: 'company-form' })(CompanyForm)
