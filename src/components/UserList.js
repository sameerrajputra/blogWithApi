import React from 'react';
import { connect } from 'react-redux';

class UserList extends React.Component{
    render() {
        const {user} = this.props;
        if(!user){
            return null;
        }
        return <div>{ user.name }</div>
    }
}

const mapStateToProps = (state, ownProps) => {
    return { user: state.users.find(user => user.id === ownProps.id) }
};

export default connect(mapStateToProps)(UserList);