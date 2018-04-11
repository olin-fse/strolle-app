import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory, Route} from 'react-router';
// import '../css/index.css';
import { App, Path, Create_Path, signupComp, loginComp, User } from './containers/App'
import 'bootstrap/dist/css/bootstrap.css';
import './../css/Navigation.css';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route exact path='/' component={App} />
        <Route path='/signup' component={signupComp} />
        <Route path='/paths/:id' component={Path} />
        <Route path='/create' component={Create_Path} />
        <Route path='/login' component={loginComp} />
        <Route path='/users/:id' component={User} />
    </Router>,
    document.getElementById('root')
);
