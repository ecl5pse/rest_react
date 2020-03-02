import React from 'react';
import './App.module.css';
import {postTask , getUserTasks} from './api';
import Form from './component/form';


class App extends React.Component {

  constructor (props) {
    super( props );
    this.state = {
      tasks: [],
      error: null,
    };
  }
  async componentDidMount () {
    try {
      this.setState( {
        isFetching: true
      } );

      const { data: tasks } = await getUserTasks();

      this.setState( {
        tasks
      } );

    } catch (e) {
      this.setState( {
          error: e.response.error,
      } );
    } finally {
      this.setState( {
        isFetching: false,
      } );
    }

  }

  onSubmit= (newTask)=>{

    this.setState({
      tasks:[newTask, ...this.state.tasks]
    })
  };

  render () {

    const {tasks, isFetching } = this.state;
    return (
  <div>
    <Form onSubmit={this.onSubmit}/>
          <ul>
            {
              isFetching && <li>Loading...</li>
            }

            {
              tasks.map( item => (
                  <li key={item.id}>{`${item.value} ${item.deadline}. Completed: ${item.isDone}`}</li>
              ) )
            }
          </ul>
  </div>

    );
  }
}

export default App;
