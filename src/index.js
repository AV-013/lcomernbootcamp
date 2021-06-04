import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Link, Switch, BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import user from './User';
import visit from './Visit';
import notfound from './notfound';

const routing=(
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/User">User</Link>
        </li>
        <li>
          <Link to="/Visit">Visit</Link>
        </li>
      </ul>
    </div>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/User" component={user} />
      <Route path="/Visit" component={visit} />
      <Route path="/" component={notfound} />
    </Switch>
  </Router>
);
ReactDOM.render(routing, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
