import React from 'react';
import PropTypes from 'prop-types';
import {getUserTasks, postTask} from '../../api/taskController';
import styles from './Form.module.scss';

class  Form extends  React.Component {

  constructor (props) {
    super( props );
    this.state = {
      value: '',
      deadline: '',
      isDone: false,
    };
  }

  handleChange = e => {
    const { target } = e;
    this.setState( {
      [target.name]: target[target.type === 'checkbox'
          ? 'checked'
          : 'value'],
    } );
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { data } = await postTask( this.state );
    this.props.onSubmit( data );
  };

  render () {
    const { value, deadline, isDone } = this.state;
    return (
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="taskValueInput">
            <span>Task value: </span>
            <input id="taskValueInput" type="text" name="value" value={value} onChange={this.handleChange}/>
          </label>

          <br/>

          <label htmlFor="taskDateInput">
            <span>Task deadline: </span>
            <input id="taskDateInput" type="date" name="deadline" value={deadline} onChange={this.handleChange}/>
          </label>

          <br/>

          <label htmlFor="taskIsDoneInput">
            <span>Is done: </span>
            <input id="taskIsDoneInput" type="checkbox" name="isDone" checked={isDone}
                   onChange={this.handleChange}/>
          </label>

          <br/>
          <input type="submit"/>
        </form>

    );
  }

}

Form.propsTypes = {
  onSubmit: PropTypes.func.isRequired
};

export  default Form;