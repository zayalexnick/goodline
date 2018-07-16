import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '~/screens/Auth/actions';
import { View, Text, Button } from 'react-native';
import theme from '~/theme';

@connect((state) => ({
	auth: state.auth
}), actions)
export default class extends Component
{
	_logout = async () => {
		await this.props.logout();
		this.props.navigation.navigate('Auth');
	};

	render()
	{

		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>Мне лень заполнять профиль :)</Text>
				<Button color={theme.colors.primary} title="Выйти" onPress={this._logout} />
			</View>
		);
	}
}