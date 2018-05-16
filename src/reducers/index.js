import { combineReducers } from 'redux';
import UserReducers from './user_reducers';

const rootReducer = combineReducers({
	usersItems: UserReducers,
});

export default rootReducer;
