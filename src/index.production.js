// CSS
import './scss/style.scss';
import './css/tailwind.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configuredStore from './store.production';
import AppContainer from './pages/AppContainer';

const TARGET_EL = document.getElementById('root');

const Root = () => {
  return (
    <Provider store={configuredStore()}>
      <>
        <AppContainer />
      </>
    </Provider>
  );
};

ReactDOM.render(<Root />, TARGET_EL);
