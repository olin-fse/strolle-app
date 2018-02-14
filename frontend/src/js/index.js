import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import '../css/index.css';
import { App, Path, Create_Path } from './containers/App'
import 'bootstrap/dist/css/bootstrap.css';
import './../css/Navigation.css';

ReactDOM.render(
    <Router>
        <Route exact path='/' component={App} />
        <Route path='/paths/:id' component={Path} />
        <Route path='/create' component={Create_Path} />
    </Router>,
    document.getElementById('root')
);
