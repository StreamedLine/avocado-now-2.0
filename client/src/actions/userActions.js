export const createUser = ({email, username, password}) => {
	return (dispatch) => {
		return {type: 'CREATE_USER'}
	}
 	
};


export const loginUser = ({email, password}) => {
	return (dispatch) => {
		return {type: 'LOGIN_USER', payload: {email}}
	}
 	
};
