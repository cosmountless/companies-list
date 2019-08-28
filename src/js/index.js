import App from './components/app'
import React from 'react'
import { render } from 'react-dom'

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('app-container');
  const app = (
    <App />
  );
  render(app, container)
});
