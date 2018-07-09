import { combineReducers } from 'redux';

import { reducer as newsReducer } from '~/screens/News';

export default combineReducers({
	news: newsReducer
});