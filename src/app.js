import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { I18nextProvider } from 'react-i18next';

import './styles.less';
import i18next from './i18next';
import Routing from './routes/Routing';
import rootReducer from './store/reducer';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <Provider store={store}>
    <I18nextProvider i18n={i18next}>
      <Routing />
    </I18nextProvider>
  </Provider>,
  // eslint-disable-next-line no-undef
  document.getElementById('root'),
);
