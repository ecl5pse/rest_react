import React, {ReactPropTypes as PropTypes} from 'react';

class DataLoader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      data: null,
      error: null,
    };
  }

  loadData = () => {

    this.setState({
      isFetching: true,
    });

    try {

      this.props.getData()
          .then(response => {
            this.setState({
              data: response.data,
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
    return null;
  }
}

DataLoader.propTypes = {
  getData: PropTypes.func.isRequired,
  component:PropTypes.element.isRequired,
};

export default DataLoader;