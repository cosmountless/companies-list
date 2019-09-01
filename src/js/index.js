import App from './containers/app'
import React from 'react'
import { render } from 'react-dom'
import configureStore from './configure-store'
import createApi from './api'
import { Provider } from 'react-redux'
import { createSagaWatcher } from './sagas'
import reducers from './reducers/index'
import apiMock from './api-mock'


document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('app-container');
  const api = createApi();
  apiMock(api);
  const store = configureStore(reducers, createSagaWatcher(api));
  const app = (
    <Provider store={store}>
      <App />
    </Provider>
  );
  render(app, container);
});
