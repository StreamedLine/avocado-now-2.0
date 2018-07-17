export const createUser = ({email, username, password}) => {
	return (dispatch) => {
		//1
		dispatch({type: 'CREATE_USER_STARTED'});

		//2
		const method = "POST";

		const headers = {
			"Content-Type": "application/json",
      "Accept": "application/json"
    };

    const body = JSON.stringify({
			user: {
				email, username, password
			}
		});

		fetch('http://localhost:3000/users/create', {
			method, headers, body
		})
		.then(res => res.json())
		.then((json) => {
			let errors = json.errors || []; 
			//3
			dispatch({type: 'CREATED_USER', payload: {errors: errors}})
		});
	}
};


export const loginUser = ({email, password}) => {
	return (dispatch) => {
		return {type: 'LOGIN_USER', payload: {email}}
	}
 	
};
