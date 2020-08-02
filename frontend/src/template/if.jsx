import React from 'react';

// import { Container } from './styles';

export default props => {
  if(props.test){
      return props.children
  }
  else{
      return false
  }
}
