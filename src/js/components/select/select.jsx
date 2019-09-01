import React from 'react'

/**
 * Компонент селект.
 * @param {Function} onChange Обработчик смены занчения селекта.
 * @param {string} value Выбранное значение селекта.
 * @param {ReactElement} children Вложенные элементы.
 */
const Select = ({ onChange, value, children }) => (
  <select onChange={onChange} value={value}>
    {children}
  </select>
);

export default Select
