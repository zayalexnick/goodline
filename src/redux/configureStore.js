import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '~/redux/rootReducer';

export default () => createStore(rootReducer, compose(applyMiddleware(thunk)));