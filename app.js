import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Button, Tab, TabBarItem, Article} from 'react-weui';
import {Router, Route, hashHistory} from 'react-router'

import 'weui';
import 'react-weui/lib/react-weui.min.css';

import PageHome from './src/js/PageHome'


ReactDOM.render((
    <Router>
        <Route path={'/'} components={PageHome}/>
    </Router>
), document.getElementById('container'));
