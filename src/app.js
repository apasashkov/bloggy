import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Reboot from 'material-ui/Reboot';
import './app.css';

import AppRouter from './routes/AppRouter';
import configureStore from './store/configureStore';

const store = configureStore();

const jsx = (
  <Reboot>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </Reboot>
);

render(jsx, document.getElementById('app'));
