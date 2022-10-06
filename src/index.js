import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.scss'; //import './index.css;'
import App from './views/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';//boc ngoai react ep react chay song song redux
import { createStore } from 'redux';
import rootReducer from './store/reducers/rootReducer';

const reduxStore = createStore(rootReducer) //nap du lieu rootReducer vao bien reduxStore = ham createStore()
ReactDOM.render(
  <React.StrictMode>
    <Provider store={reduxStore}> {/*nap du lieu reduxStore vao Store (Store = noi luu tru du lieu cua Redux)*/}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
