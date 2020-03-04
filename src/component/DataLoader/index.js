import React, {Component, ReactPropTypes as PropTypes} from 'react';

class DataLoader extends Component {

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

      this.props.getData().then(
          response => {
            this.setState( {
              items: response.data
            } );
          }
      );

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

    return this.props.render( this.state.items );
  }

}

DataLoader.propTypes = {
  getData: PropTypes.func.isRequired,
  component:PropTypes.element.isRequired,
};

export default DataLoader;