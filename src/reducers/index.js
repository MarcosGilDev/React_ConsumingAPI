import { combineReducers } from 'redux';
import UserReducers from './user_reducers';
//las propiedades creadas dentro de este objeto apareceran en el objeto state del mapStateToProps
//
const rootReducer = combineReducers({
    usersItems: UserReducers
});

export default rootReducer;