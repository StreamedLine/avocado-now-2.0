import { combineReducers } from 'redux';
import { usersReducer	} from './usersReducer';
import { storesReducer	} from './storesReducer';

export default combineReducers({
  usersReducer,
  storesReducer
})
