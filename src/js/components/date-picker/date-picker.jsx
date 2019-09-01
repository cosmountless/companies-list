import React from 'react'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/src/stylesheets/datepicker-cssmodules.scss'
import ru from 'date-fns/locale/ru'
import { parse, format } from 'date-fns'

/**
 * Компонент выбора даты.
 * @param {string} value Дата в формата 'dd.MM.yyyy'.
 * @param {Function} onChange Обработчик изменения поля redux-form.field .
 * @return {ReactElement}
 */
const DatePicker = ({ input: { value, onChange } }) => {
  return (
    <ReactDatePicker
      dateFormat='dd.MM.yyyy'
      onChange={date => onChange(format(date, 'dd.MM.yyyy'))}
      locale={ru}
      selected={value ? parse(value, 'dd.MM.yyyy', new Date()) : null}
    />
  );
};

export default DatePicker

