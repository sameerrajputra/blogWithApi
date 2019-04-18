import React from 'react';
import { connect } from 'react-redux';

class UserList extends React.Component {
	render() {
		const user = this.props.user

		if(!user) {
			return null;
		}

		return (
		<div className="header">{user.name}</div>
		);
	}
};

const mapStateToProps = (state, ownProps) => {
	return { user: state.user.find(user => user.id === ownProps.id) }
}


export default connect(mapStateToProps)(UserList);