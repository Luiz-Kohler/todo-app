import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../template/custom.css'

import React from 'react';

import Menu from '../template/menu'
import Routes from './routes'

function main(props) {
  return (
    <div className="container">
      <Menu/>
      <Routes/>
    </div>
  );
}

export default main;