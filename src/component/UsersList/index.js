import React from 'react';


class UsersList extends React.Component{


    render() {
        const {items, isFetching} = this.state;
        return (
            <ol>
                {
                    items.map(item => (
                        <li key={item.id}>{`${item.firstName} ${item.lastName}`}</li>))
                }
                {
                    isFetching && <li>Loading...</li>
                }
            </ol>
        );
    }

}
export default UsersList;