import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

export const fetchPostsAndUsers = () => async(dispatch, getState) => {
	await dispatch(fetchPosts());

	// const userIds = _.uniq(_.map(getState().posts, 'userId'));
	// userIds.forEach(id => dispatch(fetchUser(id)));

	const userIds = _.chain(getState().posts)
					 .map('userId')
					 .uniq()
					 .forEach(id => dispatch(fetchUser(id)))
					 .value();
};

export const fetchPosts = () =>  async dispatch => {
	const response = await jsonPlaceholder.get('/posts');

	dispatch ({
			type: 'FETCH_POST',
			payload: response.data
		});
};

export const fetchUser = (id) => {
	return async (dispatch) => {
		const response = await jsonPlaceholder.get(`/users/${id}`)

		dispatch({
			type: 'FETCH_USER',
			payload: response.data
		});
	};
};

//memoize from lodash libraby helps to make only 1 request for a particular user route 

// const _fetchUser = _.memoize(async (id, dispatch) => {
// 	const response = await jsonPlaceholder.get(`/users/${id}`)

// 		dispatch({
// 			type: 'FETCH_USER',
// 			payload: response.data
// 		});
// });