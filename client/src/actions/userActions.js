//conveniant object and method

const postWithHeaders = {
	method: 'POST',
	headers: {
		"Content-Type": "application/json",
    "Accept": "application/json"
  }
};

// const postWithHeadersWithAuth = (jwt) => {
// 	const pwhwa = Object.assign({}, postWithHeaders);
// 	pwhwa.headers["Authorization"] = `Bearer ${jwt}`;
// 	return pwhwa
// };


//
//actions

export const createUser = ({email, username, password}) => {
	return (dispatch) => {
		//1
		dispatch({type: 'CREATE_USER_STARTED'});

		//2
		const { method, headers } = postWithHeaders;

    const body = JSON.stringify({
			user: {
				email, username, password
			}
		});

		fetch('http://localhost:3000/users/create', {
			method, headers, body
		})
		.then(res => res.json())
		.then(json => {
			let errors = json.errors || []; 
			//3
			dispatch({type: 'CREATED_USER', payload: {errors: errors}})
		});
	}
};


export const loginUser = ({email, password}) => {
	return (dispatch) => {
		//1
		dispatch({type: 'LOGIN_STARTED'});

		//2
		const { method, headers } = postWithHeaders;

    const body = JSON.stringify({
			auth: {
				email, password
			}
		});

		fetch('http://localhost:3000/user_token', {
			method, headers, body
		})
		.then((res) => {console.log(res);return res.json()})
		.then(json => {
			//3
			window.localStorage.setItem('token', json.jwt);
			let errors = json.errors || []; 

			dispatch({type: 'LOGGED_IN_USER', payload: {errors: errors}})
		})
		.catch(err => dispatch({type: 'LOGGED_OUT', errors: ["Wrong username/password"]}));
	}
};


export const logoutUser = () => {
	window.localStorage.removeItem('token');
	return dispatch => dispatch({type: 'LOGGED_OUT', errors: []});
}




























