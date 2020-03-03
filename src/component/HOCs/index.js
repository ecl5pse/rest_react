import React from 'react';
import {getUserTasks} from '../../api';

function listWithData(WrappedComponent) {

  return class NewComponent extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        isFetching: false,
        items: [],
        error: null,

      };

    }

    loadData = () => {
      this.setState({
        isFetching: true,
      });

      try {
        getUserTasks()
            .then(response => {
              this.setState({
                items: [ ...this.state, ...response.data],
              });
            });

      } catch (e) {
        this.setState({
          error: e,
        });
      } finally {
        this.setState({
          isFetching: false,
        });
      }
    };

    componentDidMount() {
      this.loadData();
    }

    render() {
      return (
          <WrappedComponent {...this.state} {...this.props}/>
      )
    }
  }
}


export default listWithData;