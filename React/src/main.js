'use strict';

import React from 'react';
import AppView from './views/appView';
import Contact from './views/appView';
import About from './views/appView';

let customData = require('./assets/json/data.json');

React.render(<AppView demoData={customData}/>, document.getElementById('root'))