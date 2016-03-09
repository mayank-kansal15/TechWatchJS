'use strict';

import React from 'react';
import { render } from 'react-dom'
import { browserHistory, Router, Route, Link } from 'react-router'
import AppView from './views/appView';
import RouteInfo from './routeInfo';
import DataView from './views/dataView';

render((
	<Router history={browserHistory}>
	  <Route path={RouteInfo.Home} component={AppView}>
	    <Route path={RouteInfo.Data} component={DataView} />
	  </Route>
	</Router>
), document.getElementById('root'));