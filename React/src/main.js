import React from 'react';
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-route'
import AppView from './views/appView';
import Contact from './views/appView';
import About from './views/appView';
var customData = require('./assets/json/data.json');
React.render(<AppView demoData={customData}/>, document.getElementById('root'))