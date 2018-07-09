import api from '~/api';
import { createAction } from 'redux-actions';

export const requested = createAction('[NEWS] REQUESTED', payload => payload, () => ({ pending: 'pending' }));
export const received = createAction('[NEWS] RECEIVED', payload => payload, () => ({ pending: 'loaded' }));
export const failed = createAction('[NEWS] FAILED', payload => payload, () => ({ pending: 'failed' }));

export const entities = createAction('[NEWS] ENTITIES', (category, entities) => ({ category, entities }));

export const error = createAction('[NEWS] ERROR', (category, error) => ({ category, error }));

export const getList = () => async (dispatch) => {
	try
	{
		dispatch(requested('list'));

		const { data } = await api.news();

		dispatch(entities('list', data.articles));
		dispatch(received('list'));
	}
	catch (e)
	{
		dispatch(failed('list'));
		dispatch(error('list', e.message));
	}
};

export const getItem = (id) => async (dispatch) => {
	try
	{
		dispatch(requested('item'));

		const { data } = await api.current(id);

		dispatch(entities('item', data));
		dispatch(received('item'));
	}
	catch (e)
	{
		dispatch(failed('item'));
		dispatch(error('item', e.message));
	}
};