import React from 'react';
import ReactDom from 'react-dom';
import {HashRouter as Router, Route} from 'react-router-dom';
import Login from './views/login.jsx';
import Home from './views/home.jsx';

const App = () => {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Login}/>
                <Route path="/home" component={Home}/>
            </div>
        </Router>
    );
};

ReactDom.render(<App/>, document.getElementById("TEST-APP"));

import styles from './scss/index.scss';
