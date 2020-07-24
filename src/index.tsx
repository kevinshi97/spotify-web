import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App, Auth} from './components';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);

function AppRouter() {
  return (
    <Router>
       <Route path="/" exact component={Auth} />
       <Route path="/web" component={App} />
   </Router>
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
