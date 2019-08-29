import App from './containers/app'
import React from 'react'
import { render } from 'react-dom'
import configureStore from './create-store'
import { Provider } from 'react-redux'
import { createSagaWatcher } from './sagas'
import reducers from './reducers/index'

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('app-container');
  const api = {};
  const store = configureStore(reducers, createSagaWatcher(api));
  const app = (
    <Provider store={store}>
      <App />
    </Provider>
  );
  render(app, container);
});
