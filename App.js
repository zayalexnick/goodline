import React, { Component } from 'react';
import { AppLoading, Asset, Font } from 'expo';
import { Image, View, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import _ from 'lodash';
import App from '~/App';

export default class extends Component
{
	state = {
		ready: false
	};

	_cacheResources = async () => {
		const cacheImages = (images) => _.map(images, (image) => typeof image === 'string' ? Image.prefetch(image) : Asset.fromModule(image).downloadAsync());
		const cacheFonts = (fonts) => _.map(fonts, (font) => Font.loadAsync(font));

		const images = cacheImages([
			require('./assets/background.jpg')
		]);

		const fonts = cacheFonts([
			Ionicons.font,
			{ 'OpenSansRegular': require('./assets/fonts/Roboto-Regular.ttf') },
			{ 'OpenSansLight': require('./assets/fonts/Roboto-Light.ttf') },
			{ 'OpenSansMedium': require('./assets/fonts/Roboto-Medium.ttf') },
		]);

		return Promise.all([...images, ...fonts]);
	};

	render()
	{
		const { ready } = this.state;

		if (!ready)
			return (
				<AppLoading
					startAsync={this._cacheResources}
					onFinish={() => this.setState({ ready: true })}
					onError={console.warn}
				/>
			);

		return (
			<App />
		);
	}
}