const usersReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_USER':
        return state;    


    default: 
      return state
  }
}


export { usersReducer }