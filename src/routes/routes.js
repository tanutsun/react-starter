import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from '../containers/app/App';
import Home from '../containers/home/home';
import About from '../containers/about/about';

export default () => {
  return (
    <Router history={browserHistory}>
      <Route path='/'
             component={App}>
        <IndexRoute component={Home} />
        <route path='about-us'
               component={About} />
      </Route>
    </Router>
  )
}