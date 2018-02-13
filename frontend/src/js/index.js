import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory, Route} from 'react-router';
// import '../css/index.css';
import { App, Path, Create_Path } from './containers/App'
import 'bootstrap/dist/css/bootstrap.css';
import './../css/Navigation.css';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={App} />
        <Route exact path='/paths/:id' component={Path} />
        <Route path='/create' component={Create_Path} />
    </Router>,
    document.getElementById('root')
);
