import React, { Component } from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'

import { changeDescription, cleanDescription, search , add} from '../main/store/actions/todo'

class TodoForm extends Component {
  constructor(props) {
    super(props)
    this.keyHandler = this.keyHandler.bind(this)
  }

  //call
  componentWillMount() {
    this.props.search()
  }


  keyHandler(event) {
    const {add, search, description} = this.props
    if (event.key === 'Enter') {
      event.shiftKey ? search() : add(description)
    }
    else if (event.key === 'Escape') {
      this.props.cleanDescription()
    }
  }

  render() {

    const {add, search, description} = this.props

    return (
      <div role='form' className='todoForm'>
        <Grid cols='12 9 10'>
          <input id='description' placeholder='Adicione uma nova tarefa'
            className='form-control' value={this.props.description} onChange={this.props.changeDescription}
            onKeyUp={this.keyHandler} />
        </Grid>
        <Grid cols='12 3 2'>
          <IconButton style='success' icon='plus' onClick={() => add(description)} />
          <IconButton style='info' icon='search' onClick={() => search()} />
          <IconButton style='danger' icon='close' onClick={this.props.cleanDescription} />
        </Grid>
      </div>
    )
  }

}
const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispatch => bindActionCreators({ search, cleanDescription, changeDescription, add }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);