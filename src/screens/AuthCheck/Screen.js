import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AsyncStorage, ActivityIndicator } from "react-native";
import { Container } from './styles';

@connect((state) => ({
	auth: state.auth
}))
export default class extends Component
{
	async componentDidMount()
	{
		await this._checkAuth();
	}

	_checkAuth = async () => {
		this.props.navigation.navigate(!! await AsyncStorage.getItem('auth') ? 'Profile' : 'Auth');
	};

	render()
	{
		return (
			<Container>
				<ActivityIndicator />
			</Container>
		);
	}
}