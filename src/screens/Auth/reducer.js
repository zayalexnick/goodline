import { handleActions, combineActions } from 'redux-actions';
import { Map } from 'immutable';
import * as actions from './actions';

const initialState = Map({
	pending: null,
	error: null
});

const reducer = handleActions({
	[combineActions(actions.requested, actions.success, actions.failed, actions.reset)]: (state, { payload, meta }) => state.set('pending', meta.pending).set('error', null),
	[actions.error]: (state, { payload }) => state.set('error', payload.error)
}, initialState);

export default reducer;
