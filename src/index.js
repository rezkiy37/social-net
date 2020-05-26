import React from 'react';
import ReactDOM from 'react-dom';
//Data Base
import store from './redux/redux-store'
//css
import './index.css';
//
import * as serviceWorker from './serviceWorker';
//components
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App.jsx';


//callSubscriber
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


