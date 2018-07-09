import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import Navigation from '~/Navigation';

import configureStore from '~/redux/configureStore';
import theme from '~/theme';

export default () => (
	<Provider store={configureStore()}>
		<ThemeProvider theme={theme}>
			<Navigation />
		</ThemeProvider>
	</Provider>
);