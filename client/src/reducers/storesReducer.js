const initialState = {
  creatingStore: false,
  errors: [],
  redirect: false,
  stores: []
};

const storesReducer = (state = initialState, action) => {
  let errors = null;

  switch (action.type) {

    //1
    case 'CREATE_STORE_STARTED':
      return Object.assign({}, state, {creatingStore: true, errors: []})


    //2
    case 'CREATED_STORE':
      let redirect = true;

      if (action.payload.errors.length) {
        redirect = false;
        errors = action.payload.errors;
      }
      return Object.assign({}, state, {creatingStore: false, redirect, errors});

    //default
    default: 
      return state
  }
}

export { storesReducer }