import React from 'react';


class TasksList extends React.Component{



  render() {
    const {items, isFetching} = this.props;
    return (
        <ol>
          {
            items.map(item => (
                <li key={item.id}>{`${item.value} ${item.isDone} `}</li>))
          }
          {
            isFetching && <li>Loading...</li>
          }
        </ol>
    );
  }

}
export default TasksList;