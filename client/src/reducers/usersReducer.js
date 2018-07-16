const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_USER':
        return state;    

    case 'LOGIN_USER':
    		return Object.assign(state, {email: action.payload.email})

    default: 
      return state
  }
}


export { usersReducer }