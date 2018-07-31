//conveniant object and method

const postWithHeaders = {
	method: 'POST',
	headers: {
		"Content-Type": "application/json",
    "Accept": "application/json"
  }
};

// const getWithHeaders = {
// 	method: 'GET',
// 	headers: {
// 		"Content-Type": "application/json",
//     "Accept": "application/json"
//   }
// };

const postWithHeadersWithAuth = (jwt) => {
	const pwhwa = Object.assign({}, postWithHeaders);
	pwhwa.headers["Authorization"] = `Bearer ${jwt}`;
	return pwhwa
};


const getJWT = () => {
	let token = window.localStorage.token;
	if (!token) {
		return false
	}
	return token
}

//
//actions

export const createStore = ({zip, address, name, website, ripeness}) => {
	return (dispatch) => {
		//1
		dispatch({type: 'CREATE_STORE_STARTED'});

		//2
		const { method, headers } = postWithHeadersWithAuth(getJWT());

    const body = JSON.stringify({
			store: {
				zip, address, name, website, ripeness
			}
		});

		fetch('http://localhost:3000/stores', {
			method, headers, body
		})
		.then(res => res.json())
		.then(json => {
			let errors = json.errors || []; 
			//3
			dispatch({type: 'CREATED_STORE', payload: {errors: errors}})
		});
	}
};

export const findByZip = ({zip}) => {
	return (dispatch) => {
		//1
		dispatch({type: 'SEARCH_STARTED'});

		//2
		const method = 'GET';

		fetch(`http://localhost:3000/stores/zip/${zip}`, {
			method
		})
		.then(res => res.json())
		.then(json => {
			let errors = json.errors || []; 
			//3
			dispatch({type: 'RETRIEVED_STORES_BY_ZIP', payload: {stores: json.stores, errors: errors}})
		});
	}
}