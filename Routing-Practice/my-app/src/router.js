import React from 'react';
import App from './App.js'
import nextPage from './nextPage';

import {BrowserRouter as Router, Route} from 'react-router-dom';

export default(
    <Router>
        <div>
            <Route component={App} exact path='/' />
            <Route component={nextPage} path='/nextPage' />
        </div>
    </Router>
)