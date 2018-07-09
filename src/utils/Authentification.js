import React  from 'react';
import { AsyncStorage } from 'react-native';

export default (WrappedComponent) => class extends WrappedComponent
{
	state = {
		authorized: false
	};



	async componentDidMount()
	{
		await this.setState({ authorized: !!await AsyncStorage.getItem('item') });
	}
}