const initialState = {
	creatingUser: false,
	errors: [],
	redirect: false,
	username: "",
	loggingIn: false,
	loggedIn: false
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
  	case 'CREATE_USER_STARTED':
  		return Object.assign({}, state, {creatingUser: true})


    case 'CREATED_USER':
    	let redirect = true,
  			errors = null;
  		if (action.payload.errors.length) {
  			redirect = false;
  			errors = action.payload.errors;
  		}
      return Object.assign({}, state, {creatingUser: false, redirect, errors});    


    case 'LOGIN_USER':
    		return Object.assign(state, {email: action.payload.email})


    default: 
      return state
  }
}

export { usersReducer }