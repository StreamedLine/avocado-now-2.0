const initialState = {
  creatingStore: false,
  errors: [],
  redirect: false,
  stores: [],
  searching: false,
  query: ''
};

const storesReducer = (state = initialState, action) => {
  let errors = null;
  let redirect = false;

  switch (action.type) {

    //1
    case 'CREATE_STORE_STARTED':
      return Object.assign({}, state, {creatingStore: true, errors: []})


    //2
    case 'CREATED_STORE':
      redirect = true;

      if (action.payload.errors.length) {
        redirect = false;
        errors = action.payload.errors;
      }
      return Object.assign({}, state, {creatingStore: false, redirect, errors});


    //3
    case 'SEARCH_STARTED':
      return Object.assign({}, state, {searching: true, errors: []})


    //4
    case 'RETRIEVED_STORES_BY_ZIP':
      redirect = true;

      if (action.payload.errors.length) {
        redirect = false;
        errors = action.payload.errors;
      }
      
      return Object.assign({}, state, {stores: action.payload.stores, searching: false, redirect, errors})


    //default
    default: 
      return state
  }
}

export { storesReducer }