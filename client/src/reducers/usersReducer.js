const initialState = {
	creatingUser: false,
	errors: [],
	redirect: false,
	username: "",
	loggingIn: false,
	loggedIn: false
};

const usersReducer = (state = initialState, action) => {
  let errors = null;

  switch (action.type) {
    //1
  	case 'CREATE_USER_STARTED':
  		return Object.assign({}, state, {creatingUser: true, errors: []})


    //2
    case 'CREATED_USER':
    	let redirect = true;

  		if (action.payload.errors.length) {
  			redirect = false;
  			errors = action.payload.errors;
  		}
      return Object.assign({}, state, {creatingUser: false, redirect, errors});    


    //3
    case 'REDIRECTED_USER':
      return Object.assign({}, state, {redirect: false})


    //4
    case 'LOGIN_STARTED':
    	return Object.assign(state, {loggingIn: true, errors: []})


    //5
    case 'LOGGED_IN_USER':
    let loggedIn = true;

      if (action.payload.errors.length) {
        loggedIn = false;
        errors = action.payload.errors;
      }
      return Object.assign({}, state, {loggingIn: false, loggedIn: true})


    //6
    case 'LOGGED_OUT':
      let cleanup = {};
      if (action.errors.length) {
        cleanup.errors = action.errors;
        cleanup.loggingIn = false;
      }
      return Object.assign({}, state, cleanup, {loggedIn: false})


    //default
    default: 
      return state
  }
}

export { usersReducer }