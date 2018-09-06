import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import { BrowserRouter } from 'react-router-dom';

import App from './app/App.jsx';
import registerServiceWorker from './registerServiceWorker';
import { rootReducer } from './app/store/reducers';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store = {store} >
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
