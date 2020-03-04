import React from 'react';

const listWithData = (fetchData, WrappedComponent) => (class extends React.Component {

  constructor (props) {
    super( props );
    this.state = {
      isFetching: false,
      items: [],
      error: null,
    };
  }

  loadData = () => {
    this.setState( {
      isFetching: true,
    } );
    try {
      fetchData()
          .then( response => {
            this.setState( {
              items: [...this.state.items, ...response.data]
            } );
          } );
    } catch (e) {
      this.setState( {
        error: e,
      } );
    } finally {
      this.setState( {
        isFetching: false,
      } );
    }
  };

  componentDidMount () {
    this.loadData();
  }

  render () {
    return <WrappedComponent {...this.state} {...this.props}/>;
  }
});


export default listWithData;