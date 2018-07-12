import { combineReducers } from 'redux';

import { reducer as newsReducer } from '~/screens/News';
import { reducer as authReducer } from '~/screens/Auth';

export default combineReducers({
	news: newsReducer,
	auth: authReducer
});