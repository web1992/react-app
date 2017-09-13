import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './login/login';
import Home from './home/Home';
import registerServiceWorker from './registerServiceWorker';
import { Button } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'
//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Login />, document.getElementById('root'));

//ReactDOM.render(<Button>Start</Button>, document.getElementById('root'));
ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
