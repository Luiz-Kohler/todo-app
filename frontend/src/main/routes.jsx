import React from 'react';
import {Router, Route, Redirect, hashHistory} from 'react-router';

 import Todo from '../todo/todo';
 import About from '../about/about';

function main() {
  return (
      <Router history={hashHistory}>
          <Route path='/todos' component={Todo}/>
          <Route path='/about' component={About}/>
            <Redirect from='*' to='/todos'/>
      </Router>
  )
}

export default main;